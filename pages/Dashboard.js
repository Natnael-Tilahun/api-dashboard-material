import React from 'react';
import dashboardContainer from '../Layouts/dashboardContainer';
import Nav from '../Layouts/Nav';
import newuserContainer from '../Layouts/newuserContainer';
export default function dashboard(props) {
  return (
    <div>
      <Nav pages={dashboardContainer} />
    </div>
  );
}
