import React, { useState } from 'react'

export default function GroupedTeamMember({employees,selectedTeam,setselectedTeam,handleEmployeeCard}) {

    const [groupedEmployees,setgroupedTeam] = useState();
  return (
      <footer className="container">
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
            <h1>Grouped Team Member</h1>
        </div>
      </div>
    </footer>
    
  )
}
