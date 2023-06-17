import React, { useState } from 'react'
import img from '../images/icons8-employee-96.png'
import female_img from '../images/icons8-employee-80.png'

export default function Employee({employees,selectedTeam,setselectedTeam,handleEmployeeCard}) {

    return (
        // <main>
        // {
        //     employees.map((Emp) =>{
        //         return <p>{Emp.fullName}</p>
        //     })
        // }
        // </main>
    <main className='container'>
        <div className="row justify-content-center mt-3 mb-5">
          <div className="col-6">
          <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example" value={selectedTeam} onChange={(e)=>
          {
            setselectedTeam(e.target.value)
            console.log(e.target.value);
          }}>
            <option selected>Select Team</option>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
          </div>
          {/* 'card mb-2 m-2' */}
            <div className="col-8">
              <div className='card-collection'>
                    {
                        employees.map((Employee)=>{
                            return  <div id={Employee.id} className={(Employee.teamName === selectedTeam ? 'card mb-2 m-2 standout' : 'card mb-2 m-2')} style={{width: "18rem" , cursor : "pointer"}}onClick={handleEmployeeCard} >
                                {
                                  (Employee.gender=="male") 
                                    ? 
                                      <img src={img} className='card-img-top'></img> 
                                    : 
                                    <img src={female_img} className='card-img-top'></img>
                                }
                                <div className="card-body">
                                    <h5 className='card-title'>{Employee.fullName}</h5>
                                    <p className='card-text'><b>Designation : </b>{Employee.designation}</p>
                                </div>
                            </div>
                        })
                    }
                    </div>
            </div>
        </div>
    </main>
  )
}
