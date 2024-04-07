import React, {useState} from "react"
import {useTranslation} from 'react-i18next'
import {Link} from 'react-scroll'
import SideBar from "./SideBar"
import * as FaIcons from 'react-icons/fa';
import './NavBar.css'



const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

   const [t, i18n] = useTranslation("global")
    

   

    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = () => {
    setIsActive(true);
    
  };


    return(


        <header className="st-navbar">
		<nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation">
			<div className="container">
				
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sept-main-nav">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>




					<Link className="navbar-brand"to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}
      style={{ cursor: 'pointer' }} 
      activeClass='false'><img src="assets/photos/logoo3.png" alt="" className="img-responsive"/></Link>
				</div>





				
				<div className="collapse navbar-collapse main-nav" id="sept-main-nav">
					<ul className="nav navbar-nav navbar-right">
						<li ><Link to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} 
      style={{ cursor: 'pointer' }}>{t("home.NavBar-Home")}</Link></li>




						<li><Link  to="about" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
      >{t("home.NavBar-About")}</Link></li>





						<li><Link to="service" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500}
      style={{ cursor: 'pointer' }} >{t("home.NavBar-Services")}</Link></li>




						<li><a
    href="https://blog.mental-flex.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{ cursor: 'pointer' }}
  >
    {t("home.NavBar-Blog")}
  </a></li>





						<li><Link  to="pricing" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
      style={{ cursor: 'pointer' }} >{t("home.NavBar-Pricing")}</Link></li>




						
						<li><Link to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      style={{ cursor: 'pointer' }}>{t("home.NavBar-Contact")}</Link></li>



<li> <a onClick={()=> i18n.changeLanguage("es")} style={{ cursor: 'pointer' }}>ES</a></li>
<li> <a onClick={()=> i18n.changeLanguage("en")} style={{ cursor: 'pointer' }}>EN </a></li>



<li><a  onClick={showSidebar} style={{ cursor: 'pointer' }} ><FaIcons.FaBars/></a>

<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
<ul className='nav-menu-items' onClick={showSidebar}>

<SideBar/>
</ul>
</nav>
</li>



					</ul>
				</div>
			</div>
		</nav>
	</header>

    
        
    )
}

export default NavBar