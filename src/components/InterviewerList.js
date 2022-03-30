// This file is used to render the entire list of interviews availible for the slot
import React from "react";
import './DayListItem.scss'

import { InterviewerListItem } from "./InterviewerListItem";
import './InterviewList.scss'
import PropTypes from 'prop-types';

function InterviewerList(props) {
  
  const interviewers = props.interviewers.map((data) => {
    return(
    <InterviewerListItem
    key={data.id}
    name={data.name}
    avatar={data.avatar}
    selected={data.id === props.value}
    setInterviewer={() => props.onChange(data.id)}/>
    );
   
  });

  return (
  <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
    {interviewers}
    </ul>
</section>
  )
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;