// this file displays a time above the appointment slot to indicate when you are booking the interview
import React from "react"

export default function Header(props) {

  return(
    <header className="appointment__time">
    <h4 className="text--semi-bold">{props.time}</h4>
    <hr className="appointment__separator" />
  </header>
  )
}