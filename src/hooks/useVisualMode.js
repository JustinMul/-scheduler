import React, { useState } from "react";

export default function useVisualMode(initialMode) {
  
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);
  
 
  function transition(mode,replace = false) {
    if(replace) {
      setHistory((prev) => [...prev.slice(0, -1), mode]);
    } else{
    setHistory([...history,mode])
  }
    setMode(mode)
  }

  function back() {
    if(history.length<2){return}
    setHistory(prev => [...prev.slice(0, -1)])
    setMode(history[history.length-2])
   
  }

  return {mode, transition, back};
}

