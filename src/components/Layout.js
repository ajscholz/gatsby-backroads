import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

export default ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
