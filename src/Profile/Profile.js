import React from 'react'
import PropTypes from 'prop-types';

export const Profile = (props) => {
  return (

    <div>
        <h1> {props.fullname}</h1>
        <h1> {props.bio}</h1>
        {props.children}
        <h1> {props.profession}</h1>
        <button onClick={()=>props.handleClick(props.fullname)}> click me </button>

    </div>
  )
}
Profile.defaultProps={
    fullname:"Issaoui",
    bio:"medecin",
    profession:"joueur",
    handleClick:()=>alert("this is me")
}


Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
  };

