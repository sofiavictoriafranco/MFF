import { GET_TESTIMONIALS } from "./actions"


const initialState = {

   
    testimonials: []
  
}

function reducer(state= initialState, {type, payload}) {

    switch(type){
        

                case GET_TESTIMONIALS:
                    return{
                        ... state,
                        testimonials: payload,
        
                    }



                
    

           


  

        default: 
        return state    
    }


    
}

export default reducer