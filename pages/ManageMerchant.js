import React from 'react';
import Nav from '../Layouts/Nav';
import ManageMerchantContainer from '../Layouts/ManageMerchantContainer';

export default function ManageUsers() {
  return (
    <div>
      <Nav pages={ManageMerchantContainer} />
    </div>
  );
}
