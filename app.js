import React from "react"
import ReactDOM from "react-dom/client"

        const heading = React.createElement("h1",{key:1},"Heading 1")
        const heading2 = React.createElement("h2",{key:2},"Heading 2")

        const container= React.createElement("div",{id:"container"},[heading,heading2])
        const root = ReactDOM.createRoot(document.getElementById("root"))

        root.render(container)
