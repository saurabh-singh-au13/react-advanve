import React from 'react'
import "./Props.css"


const Props = (props) => {

  return (
    <>
    {/* <h1>This is Props {name} and {resources} </h1> */}
    <p>Here we will pass a props to childeren <span> {props.name} </span> </p>
    <h3>
    {
      props.children
    }
    </h3>
    </>
  )
}

export default Props