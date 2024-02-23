import React, {useEffect} from "react"
import {useTranslation} from 'react-i18next'
import { getBookings } from '../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector} from "react-redux"



const Bookings = () => {

    const [t, i18n] = useTranslation("global")

    const dispatch = useDispatch()

    let { logout, loginWithPopup, isAuthenticated, user } = useAuth0();

    useEffect(()=>{
        dispatch(getBookings())
    },[dispatch])

    const bookings = useSelector(state => state.bookings)

    console.log(user.email)
    console.log(bookings)


    const userEmail = user ? user.email : null;

   

    const filteredBookings = bookings.filter(booking => booking.email === userEmail);

    

    


    return(

        <>
        <h1>Reservas filtradas por email</h1>
        <div>
            {isAuthenticated? filteredBookings.map((booking) => (
                <div >
                    <h1>ID: {booking.id}</h1>
                    <h1>EMAIL: {booking.email}</h1>
                    <h1>Meeting: {booking.meeting_url}</h1>

                    
                    
                    
                </div>
            )) : ""}
        </div>
    </>

        
    )
}

export default Bookings