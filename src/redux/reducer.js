import { GET_TESTIMONIALS, GET_BOOKINGS } from "./actions"


const initialState = {

   
    testimonials: [],
    bookings: [],
  
}

function reducer(state= initialState, {type, payload}) {

    switch(type){
        

                case GET_TESTIMONIALS:
                    return{
                        ... state,
                        testimonials: payload,
        
                    }


                    case GET_BOOKINGS:
                        return{
                            ... state,
                            bookings: payload,
            
                        }
    



                
    

           


  

        default: 
        return state    
    }


    
}

export default reducer