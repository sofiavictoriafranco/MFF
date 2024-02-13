import axios from 'axios'

export const GET_TESTIMONIALS = 'GET_TESTIMONIALS'




  export const getTestimonials = () => {
    return(dispatch) => {
        return axios("https://mentalflexbackend.vercel.app/testimonials/")
        .then(res => dispatch({
            type: GET_TESTIMONIALS,
            payload :res.data

        }))
        .catch(error => {
            
            alert('Server Loading');
        });
    }
  }


  



