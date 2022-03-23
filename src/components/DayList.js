import React from "react";
import DayListItem from "./DayListItem";

export function DayList (props) {

  const days = props.days.map((data) => {
  
    return(
    <DayListItem 
    key={data.id}
    name={data.name}
    spots={data.spots} 
    selected={data.name === props.value}
    setDay={()=>props.onChange(data.name)}  />
    );
   
  });
  return (
    <ul
    
    >{days}</ul>
  )
}
