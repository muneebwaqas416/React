import React from 'react'

export default function Header({selectedTeam,count}) {
  return (
    <header className='container bg-primary rounded'>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
      <h1>Team Member Allocation</h1>
      <h3>{selectedTeam} has {count} number of people</h3>
      </div>
      </div>
    </header>
  )
}
