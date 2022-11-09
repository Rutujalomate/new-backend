import React from 'react'
import "../css/style.css"

const SideBox = ({h1,style,p1,buttonText}) => {
  return (
    <div className='sideContainer'>
        <h1 style={style}>{h1}</h1>
        <p style={{color: 'white' ,fontWeight:600}}>{p1}</p>
        <button style={{

backgroundColor: "white",
border: "none",
color: "black",
padding: "10px 20px",
textAlign: "center",
textDecoration: "none",
display: "inline-block",
fontSize: "13px",
margin: "4px 2px",
cursor: "pointer",
        }}>{buttonText}</button>
    </div>
  )
}

export default SideBox