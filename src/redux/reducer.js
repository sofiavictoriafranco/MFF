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

                    pastBookings.sort((a, b) => {
                      const dateA = new Date(a.starts_at);
                      const dateB = new Date(b.starts_at);
                      return dateB - dateA; 
                  });



                    const pendingBookings = payload.filter(booking => {
                        const startsAt = new Date(booking.starts_at); 
                        return startsAt > currentDate && booking.cancelled_at === null; 
                      });


                      pendingBookings.sort((a, b) => {
                        const dateA = new Date(a.starts_at);
                        const dateB = new Date(b.starts_at);

                        const diffA = Math.abs(dateA - currentDate);
    const diffB = Math.abs(dateB - currentDate);
    
   
    return diffA - diffB; 
                        
                    });


                      const actualBookings = payload.filter(booking => {
                        const startsAt = new Date(booking.starts_at);
                        return startsAt >= firstDayOfMonth && startsAt <= lastDayOfMonth && booking.cancelled_at === null;
                      });


                      actualBookings.sort((a, b) => {
                        const dateA = new Date(a.starts_at);
                        const dateB = new Date(b.starts_at);
                    
                        // Calcular las diferencias entre las fechas y la fecha actual
                        const diffA = Math.abs(dateA - currentDate);
                        const diffB = Math.abs(dateB - currentDate);
                    
                        // Verificar si la fecha de inicio es en el futuro
                        if (dateA > currentDate && dateB > currentDate) {
                            // Ordenar por la fecha más cercana a la fecha actual
                            return diffA - diffB;
                        } else {
                            // Ordenar de mayor a menor
                            return dateB - dateA;
                        }
                    });


                      const bookings = payload.filter(booking => {
                        
                        return booking.cancelled_at === null; 
                      });


                      bookings.sort((a, b) => {
                        const dateA = new Date(a.starts_at);
                        const dateB = new Date(b.starts_at);
                        return dateB - dateA; // Orden descendente
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