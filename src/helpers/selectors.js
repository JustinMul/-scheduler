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