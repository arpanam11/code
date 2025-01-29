import React from 'react'


function Props({ name, age }) {
    return (
      <div>
        <h2>I am {name}!</h2>
        <h2>{age}</h2>
      </div>
    );
  }
  
// function Props(props) {
//     return (<div><h2>I am a { props.name }!</h2>
//     <h2>{props.age}</h2>
//     </div>)
   
//   }


export default Props