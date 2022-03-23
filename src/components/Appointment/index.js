import React from "react";
import './styles.scss';

export default function Appointment(props) {

  let response = (props.time ===undefined? 'No Appointments' : 'Appointment at ' + props.time)
  
  return (
  <article className="appointment">{response}</article>
  );
}