import React from 'react'
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom'
function Dashboard() {
  return (
    <div>
    <div className='d-flex flex-row' style={{width:"100%"}}>
    <div id="sidenav_emp" style={{width:"20%"}}>
    <Sidebar/>
    </div> 
<div id="body-content" style={{width:"80%"}}>
    <div className="heading ms-4 mt-5 text-center mb-5"><h4>OVERVIEW</h4></div>
    <div className="justify-content-around d-flex flex-row sectionss">
       
        <div className="card mt-3" style={{width: "22rem"}}>
            <img src="https://img.freepik.com/free-photo/closeup-candidate-signing-application-form_1262-16052.jpg?w=996&t=st=1661357706~exp=1661358306~hmac=1db2e9a75e9b09ffab8b9457cc1a4aaf1d9cf8e58812ef53ded369e539b2f19a"
                className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text ">
                    <div className="a1 text-center fs-4 mb-3 d-flex flex-coloumn">
                        <b className='ms-5'>Tasks</b>
                        <Link to='/tasks' className='btn btn-success ms-5'>Explore</Link>
                        </div>
                   
                    
                </p>
            </div>
        </div>
        <div className="card mt-3" style={{width: "22rem"}}>
            <img src="https://img.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg?size=626&ext=jpg&uid=R73825796"
                className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text ">
                    <div className="a1 text-center fs-4 mb-3">
                        <b className='ms-5'>Join Group</b>
                    <Link to='/join' className='btn btn-success ms-5'>Explore</Link>
                    </div>
                   
                </p>
            </div>
        </div>
        <div className="card mt-3" style={{width: "22rem"}}>
            <img src="https://img.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg?size=626&ext=jpg&uid=R73825796"
                className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text ">
                    <div className="a1 text-center fs-4 mb-3">
                    <b className='ms-3'>Create Group</b>
                    <Link to='/create' className='btn btn-success ms-5'>Explore</Link>
                        </div>
                   
                </p>
            </div>
        </div>
    </div>
    <div className="mt-2 p-5 justify-content-end d-flex">
    
    </div>
</div>
    </div>
</div>
  )
}

export default Dashboard
