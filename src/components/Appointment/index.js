import React from "react";
import './styles.scss';
import Header from "./Header";
import { Fragment } from 'react'
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"

export default function Appointment(props) {

 
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    console.log(props.id, interview)
    props.bookInterview(props.id, interview)
  }
  
  return (
    <Fragment>
      
    <Header time={props.time}/>    
    <div className='appointment'></div>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show

            student={props.interview.student}
            interviewer={props.interview.interviewer}

          />
      )}{mode === CREATE && (<Form interviewers={props.interviewers} onCancel={()=> back()} 
      onSave={save}
      />)}
    </Fragment>
  );
}