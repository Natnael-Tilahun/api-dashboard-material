import React from 'react';
import manageUserContainer from '../Layouts/manageUserContainer';
import Nav from '../Layouts/Nav';
import NewMerchantContainer from '../Layouts/NewMerchantContainer';

export default function ManageUsers() {
  return (
    <div>
      <Nav pages={NewMerchantContainer} />
    </div>
  );
}
