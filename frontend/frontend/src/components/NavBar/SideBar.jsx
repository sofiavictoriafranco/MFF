import React, {useEffect, useState} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from 'react-i18next'
import './NavBar.css'


const SideBar = () => {

  const [t, i18n] = useTranslation("global")

    let { logout, loginWithPopup, isAuthenticated, user } = useAuth0();
    const {loginWithRedirect} = useAuth0
    const [role, setRole] = useState();
    

    

    

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
      };


      useEffect(() => {
        const fetchData = async () => {
          if (user && isAuthenticated) {
            try {
              const username = user.name;
              const response = await axios.post('https://mentalflexbackend.vercel.app/auth/', { username });
              setRole(response.data.roles[0].name);
              
              
              toast.success(`Welcome to Mental Flex ${user.name}!`, {
                position: 'bottom-left',
              });
            } catch (error) {
              alert('No se puede crear el usuario');
            }
          }
        };
    
        fetchData(); 
      }, [user]);





  return (
    <>

{!isAuthenticated && (

<li  className='nav-text'>
<Link onClick={loginWithPopup} className="logout-button">
  <span>{t("home.sideBar-login")}</span>
</Link>
</li>
  
            )

             }


               {
                  isAuthenticated &&  ( 
                  <div className="user-info" >
                  <img
                  className="object-cover w-full h-full overflow-hidden"
                  style={{borderRadius: 100}}
                  src={user.picture}
                  alt={user.nickname}
                />
                 </div>
                 )
                }
 
 
                                 



{isAuthenticated && role === 'admin' && (


<lu>
  

<li  className='nav-text' >
<Link  onClick={handleLogout} className="logout-button">
  <span>{t("home.sidebar-logout")}</span>
</Link>
</li>


</lu>
 
           )}



{isAuthenticated && role !== 'admin' && (


<lu>

<li  className='nav-text' >
<Link to='/bookings' className="logout-button">
  <span>Bookings</span>
</Link>
</li>

  


<li  className='nav-text' >
<Link  onClick={handleLogout} className="logout-button">
  <span>{t("home.sidebar-logout")}</span>
</Link>
</li>

</lu>
 
           )}



     
    </>
  );
};

export default SideBar;