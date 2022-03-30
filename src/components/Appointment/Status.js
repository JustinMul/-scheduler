//this file is used to show status such as saving or deleting while the api call is running
import React from "react";

export default function Status(props) {
  return(
  <main className="appointment__card appointment__card--status">
    <img
      className="appointment__status-image"
      src="images/status.png"
      alt="Loading"
    />
    <h1 className="text--semi-bold">{props.message}</h1>
  </main>
  );
}