import React from 'react'
const Student = (props) => {
  return (
    <>
    <div>Name: {props.name}, age: {props.age}
    <h5> isStudent : {props.isStudent==true ? props.isStudent.toString() : 'default'}</h5>
    </div>
    
    </>
  )
}

 
export default Student