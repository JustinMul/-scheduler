import React from "react";
import "components/Application.scss";
import { DayList } from "./DayList";
import { useState } from "react";
import Appointment from "./Appointment";
import axios from "axios";
import { useEffect } from 'react';
import { getAppointmentsForDay } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const dailyAppointments = getAppointmentsForDay(state,state.day);

  const setDay = day => setState({ ...state, day });
 
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get(' http://localhost:8001/api/interviewers')
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
      {(dailyAppointments).map((dailyAppointments) => {
        return <Appointment key={dailyAppointments.id} {...dailyAppointments} />
      }) }
       <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
