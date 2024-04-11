import axios from 'axios'

export const GET_TESTIMONIALS = 'GET_TESTIMONIALS'
export const GET_BOOKINGS = 'GET_BOOKINGS'




  export const getTestimonials = () => {
    return(dispatch) => {
        return axios("https://mentalflexbackendultimo.vercel.app/testimonials/")
        .then(res => dispatch({
            type: GET_TESTIMONIALS,
            payload :res.data

        }))
        .catch(error => {
            
            alert('Server Loading');
        });
    }
  }


  export const getBookings = () => {
    return(dispatch) => {
        return axios("https://mentalflexbackendultimo.vercel.app/tidycal/getallbookings")
        .then(res => dispatch({
            type: GET_BOOKINGS,
            payload :res.data

        }))
        .catch(error => {
            
            alert('Server Loading');
        });
    }
  }


  



