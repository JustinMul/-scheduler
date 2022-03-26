export function getAppointmentsForDay(state, day) {
  let appointmentArray = []
  state.days.map((dayObject) => {
    if (dayObject.name === day) {
     let dayId = dayObject.appointments;
      dayId.map((appointmentId) => {
      if(appointmentId===state.appointments[appointmentId].id){
        appointmentArray.push(state.appointments[appointmentId])
      }
    })
    }
  })
  return appointmentArray;
}

export function getInterviewersForDay(state, day) {
  // console.log(state)
  console.log('this is state', state)
  console.log(state.days)
  console.log('this is appointments ', state.appointments)
  let interviewerArray = []
  state.days.map((dayObject) => {
    if (dayObject.name === day) {
     let dayId = dayObject.appointments;
      dayId.map((appointmentId) => {
      // console.log('this is the id', appointmentId)
      // console.log('this is state.appointmen{id}', state.appointments[appointmentId])
      const interviewID = state.appointments[appointmentId].interview
      // console.log('this is intervierw id', interviewID)
     if(state.appointments[appointmentId].interview!== null){
      //  console.log('yes')
      //  console.log('this is what is being pushed into the array', state.interviewers[interviewID.interviewer])
      interviewerArray.push(state.interviewers[interviewID.interviewer])
     }
    })
    }
  })
  return interviewerArray;
}



export function getInterview(state,interview) {

let interviewData = {};
if(interview !== null){
  const interviewerID = interview.interviewer;
  interviewData['student'] =interview.student;
  interviewData['interviewer'] = state.interviewers[interviewerID];
} else {
  interviewData = null;
}
return interviewData


}