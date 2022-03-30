//this file is used to render the side bar number of sports remaining, it gets its props from the dayList component
import React from "react";
import './DayListItem.scss'
import classNames from "classnames";

export default function DayListItem(props) {
  const liClass = (classNames('day-list__item', {'day-list__item--selected':props.selected === true, 'day-list__item--full': props.spots === 0}))

  const formatSpots = function(props) {
    let output = ""
    if(props.spots === 1) {
      output ='1 spot remaining'
    }
    else if(props.spots === 0) {
      output ='no spots remaining'
    }
    else if(props.spots>1){
      output = (props.spots + ' spots remaining')
    }
    return output
 }

  return (
    <li className = {liClass} onClick={props.setDay} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>


  );
}

