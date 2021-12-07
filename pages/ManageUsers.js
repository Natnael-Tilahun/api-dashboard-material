import React from 'react';
import manageUserContainer from '../Layouts/manageUserContainer';
import Nav from '../Layouts/Nav';

export default function ManageUsers() {
  return (
    <div>
      <Nav pages={manageUserContainer} />
    </div>
  );
}
