import { GET_TESTIMONIALS, GET_BOOKINGS } from "./actions"


const initialState = {

   
    testimonials: [],
    bookings: [],
    pastBookings: [],
    pendingBookings: [],
    actualBookings: [],
  
}

function reducer(state= initialState, {type, payload}) {

    switch(type){
        

                case GET_TESTIMONIALS:
                    return{
                        ... state,
                        testimonials: payload,
        
                    }


                    case GET_BOOKINGS:


                    const currentDate = new Date();
                    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); 
                    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0); 
              



                    const pastBookings = payload.filter(booking => {
                      const startsAt = new Date(booking.starts_at); 
                      return startsAt < currentDate && booking.cancelled_at === null; 
                    });

                    const pendingBookings = payload.filter(booking => {
                        const startsAt = new Date(booking.starts_at); 
                        return startsAt > currentDate && booking.cancelled_at === null; 
                      });


                      const actualBookings = payload.filter(booking => {
                        const startsAt = new Date(booking.starts_at);
                        return startsAt >= firstDayOfMonth && startsAt <= lastDayOfMonth && booking.cancelled_at === null;
                      });



                      const bookings = payload.filter(booking => {
                        
                        return booking.cancelled_at === null; 
                      });


                      

                  
  
  




                        return{
                            ... state,
                            bookings: payload,
                            pastBookings: pastBookings,
                            pendingBookings: pendingBookings,
                            actualBookings: actualBookings

            
                        }


                    
    



                
    

           


  

        default: 
        return state    
    }


    
}

export default reducer