//parent component
import React from "react"
import Albums from "./components/Albums/main.albums"
import MainLayouts from "./components/Layouts/main.layouts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Intro from "./components/Intro"
import Kuliner from "./components/Kuliner/index.php"

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<Intro/>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<h1>POSTING</h1>} />
            <Route path="/posts" element={<h1>POSTING</h1>} />
            <Route path="/posts" element={<h1>POSTING</h1>} />
            <Route path="/posts" element={<Kuliner/>} />
            <Route path="*" element={<h1 className="text-center text-danger">404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
    </>
  )
}

export default App