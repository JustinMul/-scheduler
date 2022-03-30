// this file is used to create a few helper functions 


//this function is used to get all appointments for a specified day
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

//this function is used to get all interviewrs for a specified day
export function getInterviewersForDay(state, day) {

  let interviewerArray = []
  if(state.days.length === 0) {
    return []
  }
  state.days.filter((dayObject)=> {
    if (dayObject.name === day) {
         let dayId = dayObject.interviewers;
          dayId.filter((interviewer) => {
         if(interviewer.id === state.interviewers.id){
          interviewerArray.push(state.interviewers[interviewer])
         }
        })
        }
  });
  
  return interviewerArray;


}

//this function is used to get interview information for the application component
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