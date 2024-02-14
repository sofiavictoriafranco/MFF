import React from "react"
import Home from "../components/Home"
import About from "../components/About"
import Funfacts from "../components/Funfacts"
import Services from "../components/Services"
import Phrase from "../components/Phrase"
import CallUs from "../components/CallUs"
import Questions from "../components/Questions"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials/Testimonials"
import NavBar from "../components/NavBar/NavBar"





const Landing = () => {


    return(

		<>

    <NavBar/>

    <Home/>
    <About/>
    <Funfacts/>
    <Services/>
    <Phrase/>
    <Questions/>
    <CallUs/>
    <Pricing/>
    <Testimonials/>
    



      

  

       </>
        
    )
}

export default Landing
