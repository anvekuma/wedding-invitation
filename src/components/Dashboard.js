import React from 'react';
import reception from '../assets/Reception.jpeg';

function Dashboard(props) {
   return (
      <div>
        <img src={reception} className="reception-logo" alt="reception" />
      </div>
    );
}

export default Dashboard;
