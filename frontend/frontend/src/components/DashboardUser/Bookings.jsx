import React, {useEffect} from "react"
import {useTranslation} from 'react-i18next'
import { getBookings } from '../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector} from "react-redux"
import './Bookings.css'
import {Spinner } from 'react-bootstrap';



const Bookings = () => {

    const [t, i18n] = useTranslation("global")

    const dispatch = useDispatch()

    let { logout, loginWithPopup, isAuthenticated, user } = useAuth0();

    useEffect(()=>{
        dispatch(getBookings())
    },[dispatch])

    const bookings = useSelector(state => state.bookings)


    const userEmail = user ? user.email : null;



    const filteredBookings =  userEmail? bookings.filter(booking => booking.email === userEmail) : null






    return(

        <>



<div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="section-title st-center">
                    <h3>Check your Bookings</h3>
                    <p>MENTAL FLEX</p>

                     </div>
                     
                         </div>

                </div>

                </div>


      <div>
            {filteredBookings? filteredBookings.map((booking) => (

                
                
                    <div class="col-md-4" > 

                   
                        <br/>
        <div class="card" >

            <div >
            <h4>ID: {booking.id}</h4>
            <p>EMAIL: {booking.email}</p>
            </div>

            <button style={{ position: 'absolute', bottom: '10px', right: '10px' }} className="btn btn-main btn-lg" onClick={() => window.location.href = booking.meeting_url}>Go</button>

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



                
            







        
  



    </>


    )
}

export default Bookings