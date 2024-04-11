import React, {useEffect, useState} from "react"
import {useTranslation} from 'react-i18next'
import { getBookings } from '../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector} from "react-redux"
import './Bookings.css'
import {Spinner, Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-scroll'
import moment from 'moment-timezone';
import Footer from '../Footer'





const Bookings = () => {

    const [t, i18n] = useTranslation("global")

	const [selectedOption, setSelectedOption] = useState("actual");

	const [loaded, setLoaded] = useState(false);

  
    

    const dispatch = useDispatch()

    let { logout, loginWithPopup, isAuthenticated, user } = useAuth0();

	const bookings = useSelector(state => state.bookings)
	const pastBookings = useSelector(state => state.pastBookings)
	const pendingBookings = useSelector(state => state.pendingBookings)
	const actualBookings = useSelector(state => state.actualBookings)

	
	
	const userEmail = user ? user.email : null;
	
	const actualFilteredBookings =  userEmail? actualBookings.filter(booking => booking.email === userEmail) : null
	
    const filteredBookings =  userEmail? bookings.filter(booking => booking.email === userEmail) : null

	const pastFilteredBookings =  userEmail? pastBookings.filter(booking => booking.email === userEmail) : null

	const pendingFilteredBookings =  userEmail? pendingBookings.filter(booking => booking.email === userEmail) : null



	
const [state, setState] = useState(null) 


useEffect(() => {
    dispatch(getBookings())
        
}, []);



useEffect(() => {
    if (loaded === false && actualFilteredBookings !== null) {
        setState(actualFilteredBookings);
        setSelectedOption("actual");
		setLoaded(true)
    }
}, [actualFilteredBookings]);

console.log(actualFilteredBookings)
console.log(state)
    


    const currentDate = new Date();



    
	

	let contMISX2 = 0


	const handleClick = (arg, str) => {
		setState(arg); 

		setSelectedOption(str)
	  };




	  const formatDateTime = (dateTimeString, timeZone) => {
		// Crea un objeto moment con la fecha y hora proporcionadas y la zona horaria UTC
		const dateTimeUTC = moment.utc(dateTimeString);
		
		// Convierte la fecha y hora a la zona horaria especificada
		const dateTimeLocal = dateTimeUTC.tz(timeZone);
		
		// Formatea la fecha y hora en un formato deseado (por ejemplo, "DD/MM/YYYY HH:mm")
		return dateTimeLocal.format("DD/MM/YYYY HH:mm");
	  };







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




						<li><a onClick={() => handleClick(actualFilteredBookings, "actual")} style={{ cursor: 'pointer', color: selectedOption === "actual" ? '#FFA500' : ''}}>{t("bookings.actual")}</a></li>
						<li><a onClick={() => handleClick(pendingFilteredBookings, "pending")} style={{ cursor: 'pointer', color: selectedOption === "pending" ? '#FFA500' : ''}}>{t("bookings.pendingB")}</a></li>
						<li><a onClick={() => handleClick(pastFilteredBookings, "past")} style={{ cursor: 'pointer', color: selectedOption === "past" ? '#FFA500' : ''}}>{t("bookings.past")}</a></li>
						



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
						<h3>{t("bookings.title1")}</h3>
						<p>{t("bookings.title2")}</p>


          
      


					</div>
      
				</div> 
 
			</div>




			<div className="row">


    


{state? state.map((booking) => (

    
    
        <div className="col-md-4" > 

       
            <br/>
<div className={`card ${currentDate <= new Date(booking.starts_at) ? '' : 'pending'}`} >

<div >
<h4>{booking.booking_type_title}</h4>
<p>{formatDateTime(booking.starts_at, booking.timezone)} - {formatDateTime(booking.ends_at, booking.timezone).slice(11,16)}</p>


{booking.booking_type_title === 'Monthly Individual sessions x2' && contMISX2<8? (


contMISX2++,
//<p>{contMISX2}/8</p>

<p></p>

): 



(
     contMISX2=0,
	//<p>{contMISX2+1}/8</p>
	<p></p>
)

}




{currentDate < new Date(booking.starts_at) ?  (

    <div>
    
    <p>{t("bookings.pending")}</p>
    </div>

      ) : currentDate === new Date(booking.starts_at)? (
        <p>{t("bookings.progress")}</p>
      ) : (
        <div>
         
        <p>{t("bookings.concluded")}</p>
        </div>
      )}






</div>

{currentDate < new Date(booking.starts_at) ? (
<button style={{ position: 'absolute', bottom: '10px', right: '10px' }} className="btn btn-main btn-lg" onClick={() => window.location.href = booking.meeting_url}>
{t("bookings.join")}
</button>
) : null}


</div>



</div>



)) : 



  <div className="text-center">
    <Spinner animation="border" role="status">
      <span className="sr-only">{t("bookings.loading")}</span>
    </Spinner>
    <p>{t("bookings.loading")}</p>
  </div>




}
</div>

				

		</div>

		<br/>

			<footer className="site-footer">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					 
					
				{t("bookings.message")}
					
				</div>
				
			</div>
		</div>
	</footer>
		
	</section>





<Footer/>

                
            








        
  



    </>


    )
}

export default Bookings