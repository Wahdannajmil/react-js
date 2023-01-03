import Dashboard from "./components/dashboard/main.dashboard"
import Albums from "./components/Albums/main.albums"
import Posts from "./components/posts/main.posts"
import MainLayouts from "./components/Layouts/main.layouts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <MainLayouts>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </MainLayouts>
      </Router>
    </>
  )
}

export default App

