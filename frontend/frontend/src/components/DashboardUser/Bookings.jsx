import React, {useEffect, useState} from "react"
import {useTranslation} from 'react-i18next'
import { getBookings } from '../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector} from "react-redux"
import './Bookings.css'
import {Spinner, Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-scroll'






const Bookings = () => {

    const [t, i18n] = useTranslation("global")

  
    

    const dispatch = useDispatch()

    let { logout, loginWithPopup, isAuthenticated, user } = useAuth0();

    useEffect(()=>{
        dispatch(getBookings())
    },[dispatch])

    const bookings = useSelector(state => state.bookings)


    const userEmail = user ? user.email : null;


    const currentDate = new Date();



    const filteredBookings =  userEmail? bookings.filter(booking => booking.email === userEmail) : null

	let contMISX2 = 0







    return(

        <>


<header className="st-navbar-mini">
		<nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation">
			<div className="container">
				
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sept-main-nav">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>




					<a className="navbar-brand" href="https://www.mental-flex.com" 
    ><img src="assets/photos/logoo3.png" alt="" className="img-responsive"/></a>
				</div>





				
				<div className="collapse navbar-collapse main-nav" id="sept-main-nav">
					<ul className="nav navbar-nav navbar-right">
						<li ></li>




						<li></li>





						<li></li>




						<li></li>





						<li></li>




						
						<li></li>



<li> <a onClick={()=> i18n.changeLanguage("es")} style={{ cursor: 'pointer', color: '#FFA500'}}>ES</a></li>
<li> <a onClick={()=> i18n.changeLanguage("en")} style={{ cursor: 'pointer', color: '#FFA500'}}>EN </a></li>






					</ul>
				</div>
			</div>
		</nav>
	</header>




<section className="pricing" id="pricing">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>Check your bookings</h3>
						<p>Mental Flex</p>


          
      


					</div>
      
				</div> 
 
			</div>




			<div className="row">


    


{filteredBookings? filteredBookings.map((booking) => (

    
    
        <div className="col-md-4" > 

       
            <br/>
<div className={`card ${currentDate < new Date(booking.starts_at) ? '' : 'pending'}`} >

<div >
<h4>{booking.booking_type_title}</h4>
<p>{booking.booking_type_duration} min</p>

{booking.booking_type_title === 'Monthly Individual sessions x2' && contMISX2<8? (


contMISX2++,
<p>{contMISX2}/8</p>

): 



(
     contMISX2=0,
	<p>{contMISX2+1}/8</p>
)

}




{currentDate < new Date(booking.starts_at) ?  (

    <div>
    
    <p>Pending</p>
    </div>

      ) : currentDate >= new Date(booking.starts_at) &&
        currentDate <= new Date(booking.ends_at) ? (
        <p>In progress</p>
      ) : (
        <div>
         
        <p>Concluded</p>
        </div>
      )}






</div>

{currentDate < new Date(booking.starts_at) ? (
<button style={{ position: 'absolute', bottom: '10px', right: '10px' }} className="btn btn-main btn-lg" onClick={() => window.location.href = booking.meeting_url}>
Join
</button>
) : null}


</div>



</div>



)) : 



  <div className="text-center">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    <p>Loading...</p>
  </div>




}
</div>

				

		</div>
	</section>




                
            








        
  



    </>


    )
}

export default Bookings