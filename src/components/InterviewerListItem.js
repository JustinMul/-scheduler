import React from "react";
import classNames from "classnames";
import './InterviewerListItem.scss'


export function InterviewerListItem(props) {
const liClass = (classNames('interviewers__item-image', {'interviewers__item--selected': props.selected === true}))


  return (
<li className={liClass} onClick = {props.setInterviewer}>
  <img
    className={"interviewers__item-image"}
    src={props.avatar}
    alt={props.name}
  />
 {props.selected && <p>{props.name}</p>}
</li>
  );
}