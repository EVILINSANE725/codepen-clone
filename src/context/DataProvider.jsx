import { createContext, useState } from "react";

export const DataContext = createContext();

import React from 'react'

export default function DateProvider(props) {
    const [htmlData, setHtmlData] = useState(` <h1>Hello Myself Poorvansh !!</h1> `, '')
    const [cssData, setCssData] = useState(`h1 {
      color: #07D4C780;
    }
    `, '')
    const [jsData, setJsData] = useState('console.log("Hello world!!");', '')
    
  return (
    <DataContext.Provider value={
        {htmlData,
        setHtmlData,
        cssData,
        setCssData,
        jsData,
        setJsData}
    }>
      {props.children}
    </DataContext.Provider>
  )
}
