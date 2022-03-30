// this file is used to get apiCalls and pull data from the server. It is also used for some state management to allow for instant rendering rather than having to wait for a reload
import { useState,useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    
  });
  
  
  const setDay = day => setState({ ...state, day });
  
  //used to update state to allow the number of spots remaining to update instantly when editing or creating an appointment
  function bookInterview(id, interview) {
   
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const dayMapping = {
      Monday: 0,
      Tuesday: 1,
      Wednesday:2, 
      Thursday:3, 
      Friday:4
    }
  
  
    let dayIndex= dayMapping[state.day]
    
    const newDays = [
      ...state.days
    ]

   
    if(state.appointments[id].interview === null){
    newDays[dayIndex].spots-=1;
    }
     return axios.put(`/api/appointments/${id}`, {interview}).then(()=> 
  
     setState({...state,appointments, days:newDays})
     
     )
  }

  //used to update state to allow the number of spots remaining to update instantly when deleting an appointment
  function cancelInterview (id) {

    const appointment = {
      ...state.appointments[id],
      interview: null 
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const dayMapping = {
      Monday: 0,
      Tuesday: 1,
      Wednesday:2, 
      Thursday:3, 
      Friday:4
    }
  
    let dayIndex= dayMapping[state.day]

    const newDays = [
      ...state.days
    ]

    newDays[dayIndex].spots+=1;

    return axios.delete(`/api/appointments/${id}`).then((data)=> {
      
      setState({...state,appointments , days:newDays})
     
    })
  }

  //api call to the server to get the data
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all)=> {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      
      
    })
  },[]);

  return {setDay, bookInterview, cancelInterview, state};
}