// This file handles the flow of booking an interview. It's used to transition between items in the appointment folder.

import React from "react";
import './styles.scss';
import Header from "./Header";
import { Fragment } from 'react'
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE"
const SAVING = "SAVING"
const DELETE = "DELETE"
const CONFIRM = "CONFIRM"
const EDIT = "EDIT"
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"

export default function Appointment(props) {

 
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview).then(()=> transition(SHOW)).catch(error => transition(ERROR_SAVE, true));
    
  }

  function deleting() {
    const interview = {
      student: null,
      interviewer:null
    };
    transition(DELETE,true)
    props.cancelInterview(props.id, interview).then(()=> transition(EMPTY)).catch(error => transition(ERROR_DELETE, true));
    
  }
  
  function confirmDelete() {
    transition(CONFIRM)
  }

  function edit() {
    
    transition(EDIT)
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
            onDelete={confirmDelete}
            onEdit={edit}
          />
    )}
    {mode === CREATE && (<Form interviewers={props.interviewers} onCancel={()=> back()} onSave={save}/>)} {mode === SAVING && <Status message="Saving" />}
    {mode === DELETE && <Status message="Deleting"/>}
    {mode === CONFIRM && <Confirm onCancel={()=> back()} onConfirm = {deleting} />}
    {mode === EDIT && <Form interviewers={props.interviewers} interviewer={props.interview.interviewer.id} student={props.interview.student} onCancel={()=> back()} onSave={save}/>}
    {mode === ERROR_DELETE && <Error onClose ={()=> back()}/>}
    {mode === ERROR_SAVE && <Error onClose ={()=> back()}/> }
      
    </Fragment>
  );
}