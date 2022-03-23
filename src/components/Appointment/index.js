import React from "react";
import './styles.scss';
import Header from "./Header";
import { Fragment } from 'react'
import Show from "./Show";
import Empty from "./Empty";


export default function Appointment(props) {
  
  let response = (props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/>:<Empty/>)
  // (props.time ===undefined? 'No Appointments' : 'Appointment at ' + props.time)
  
  
  return (
    <Fragment>
    <Header time={props.time}/>    
    <div className='appointment'>{response}</div>
    </Fragment>
  );
}