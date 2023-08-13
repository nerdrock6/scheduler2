{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById("schedulerForm").onsubmit = function(event) \{\
    event.preventDefault(); // Prevent form submission\
\
    let state = document.getElementById("state").value;\
    let dateTime = new Date(document.getElementById("datetime").value);\
    let availableProviders = [];\
\
    let providers = \{\
        "Dr. L": \{\
            states: "ALL",\
            workDays: \{\
                1: \{ start: 13, end: 17 \},\
                2: \{ start: 9, end: 17, lunch: true \},\
                4: \{ start: 9, end: 17, lunch: true \}\
            \}\
        \},\
        // ... (similarly for other doctors and NPs)\
    \};\
\
    for (let provider in providers) \{\
        if ((providers[provider].states === "ALL" || providers[provider].states.includes(state))\
            && providers[provider].workDays[dateTime.getDay()]\
            && providers[provider].workDays[dateTime.getDay()].start <= dateTime.getHours()\
            && providers[provider].workDays[dateTime.getDay()].end >= dateTime.getHours()\
            && (!providers[provider].workDays[dateTime.getDay()].lunch || (dateTime.getHours() !== 12))) \{\
            availableProviders.push(provider);\
        \}\
    \}\
\
    document.getElementById("output").textContent = availableProviders.join(", ") || "No available providers for the given time and state.";\
\};\
}