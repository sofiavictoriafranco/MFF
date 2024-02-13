import { useEffect } from 'react';
import React, { useRef, useState } from 'react';
import { getTestimonials } from '../../redux/actions';
import { useDispatch, useSelector} from "react-redux"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styleTestimonials.css';
import { Zoom, Navigation, Pagination, Autoplay} from 'swiper/modules';
import { Link } from "react-router-dom";







const Testimonials = () => {

	const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTestimonials())
    },[dispatch])

    const testimonials = useSelector(state => state.testimonials)

    

	console.log(testimonials)

	
    return(

        <section className="my-section">


<Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Zoom, Navigation, Pagination, Autoplay]}
        className="mySwiper"

      >

        {testimonials && testimonials.map((e)=>{
            return (

 <SwiperSlide>

<div className="swiper-zoom-container">
<div className='mytestimonial'>

<div className='testi-content'>

    <div className='slide'>

      <img src={e.image} alt={e.name} className='image'/>


        <p style={{fontSize: "12px"}}>{e.description}</p>
        <i className='bx bxs-quote-alt-left quote-icon'></i>
        <div className='mydetails'>
            <span className='name'>{e.name}</span>
            <Link to={e.link}>
            <span className='instagram'>{e.instagram}</span>
            </Link>

        </div>




    </div>



</div>


</div>

</div>

          
        </SwiperSlide>


            )
        })}
       
       
      </Swiper>
		
      


      </section>


        
    )
}

export default Testimonials