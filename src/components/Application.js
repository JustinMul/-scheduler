import React from "react";
import "components/Application.scss";
import { DayList } from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay } from "helpers/selectors";
import { getInterview } from "helpers/selectors";
import { getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from 'react';


export default function Application(props) {
  const {setDay, bookInterview,  cancelInterview, state} = useApplicationData();
  
  const interviewers = getInterviewersForDay(state,state.day)
  
  const appointments = getAppointmentsForDay(state, state.day).map(
    appointment => {
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          interview={getInterview(state, appointment.interview)}
          interviewers={interviewers}
          bookInterview= {bookInterview}
          cancelInterview={cancelInterview}
        />
      );
    }
  );

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
        <section className="schedule">
          {appointments}
          {/* <Appointment key="last" time="5pm" /> */}
        </section>
      </section>
    </main>
  );
}
