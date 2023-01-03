import React from "react"
import Intro from "../Intro"

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <Intro/>
      {children}
    </React.Fragment>
  )
}

export default MainLayouts