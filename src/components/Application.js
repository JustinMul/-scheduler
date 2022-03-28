import React from "react";
import "components/Application.scss";
import { DayList } from "./DayList";
import { useState } from "react";
import Appointment from "./Appointment";
import axios from "axios";
import { useEffect } from 'react';
import { getAppointmentsForDay } from "helpers/selectors";
import { getInterview } from "helpers/selectors";
import { getInterviewersForDay } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });
  
  
  const appointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state,state.day)
  
  const setDay = day => setState({ ...state, day });
  
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
     return axios.put(`/api/appointments/${id}`, {interview}).then(()=> setState({...state,appointments})).catch((error)=> console.log('there was an error 🌚'))
  }

  function cancelInterview (id) {

    const appointment = {
      ...state.appointments[id],
      interview: null 
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`).then((data)=> {
      setState({...state,appointments})
    })
  }

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all)=> {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      console.log('this is the response', all)
      
    })
  },[]);
  
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
        />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
          <DayList
          days={state.days}
          value={state.day}
          onChange={setDay} 
          />
        </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
      {
        //  const schedule = 
        //const interview = 
       appointments.map((appointment) => {
            
          return (
            <Appointment
              key={appointment.id}
              id={appointment.id}
              time={appointment.time}
              interview={getInterview(state, appointment.interview)}
              interviewers={interviewers}
              bookInterview={bookInterview}
              cancelInterview ={cancelInterview}
            />
          )
        })
      }
      {/* <Appointment key="last" time="5pm"/> */}
      </section>
    </main>
  );
}
