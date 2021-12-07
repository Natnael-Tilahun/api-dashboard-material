import React from 'react';
import Nav from '../Layouts/Nav';
import newuserContainer from '../Layouts/newuserContainer';

export default function NewUser() {
  return (
    <div>
      <Nav pages={newuserContainer} />
    </div>
  );
}
