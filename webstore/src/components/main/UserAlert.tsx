import React from 'react';
import { useSelector } from 'react-redux';

const UserAlert = () => {
  const init = useSelector((state: any) => state.initReducer.init);

  if (init) {
    return null;
  } else {
    return (
      <h3>Select your favorite popsicle flavor!</h3>
    );
  }
};

export default UserAlert;
