//This is used to render the form with all of the availible inputs such as Name and the interviewer as well as a few buttons. This form can intake data and will pass to help functions.
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import React, { useState } from 'react';


export default function Form(props) {
  const[student, setStudent] = useState(props.student || '');
  const[interviewer, setInterviewer] = useState(props.interviewer || null)
  const[error, setError] = useState("");

  const reset = function() {
    setStudent('')
    setInterviewer(null)
  }

  const cancel = function() {
    setError("")
    reset()
    props.onCancel()
  }
 function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("")
    props.onSave(student, interviewer);
  }
 

  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value = {student}
            onChange={(e)=> setStudent(e.target.value)}
            data-testid = 'student-name-input'

          />
          
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList 
          interviewers={props.interviewers}
          value = {interviewer}
          onChange = {setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick ={cancel}>Cancel</Button>
          {/* there used tp be props.onCancel */}
          <Button confirm  onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
}