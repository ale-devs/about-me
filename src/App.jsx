import React from "react"
import Information from "./components/Information"
import CursorGlow from "./components/CursorGlow"
import BackgroundDecor from "./components/BackgroundDecor"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-r to-indigo-950 from-gray-900">
      <BackgroundDecor />
      <CursorGlow />
      <div className="relative z-10">
        <Information />
      </div>
    </div>
  )
}

export default App
