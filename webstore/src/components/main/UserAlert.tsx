import React from 'react';

const UserAlert = ({isInitiated} : {isInitiated: boolean} ) => {
  if(isInitiated){
    return null
  }else{
    return(
      <h3>Select your favorite popsicle flavor!</h3>
    )
  }
}

export default UserAlert;
