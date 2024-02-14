import React, {useEffect} from "react"
import {useTranslation} from 'react-i18next'

import Footer from "../Footer"




const Purchase3ES = () => {

    const [t, i18n] = useTranslation("global")

    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.tidycal.com/js/embed.js';
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  

    return(

        

<div data-spy="scroll" data-target=".main-nav">


        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="section-title st-center">
                    <h3>Reserva tu turno</h3>
                    <p>MENTAL FLEX</p>
                    <div class="tidycal-embed" data-path="mental-flex/sesionesindividualesmensualesx2"></div>
                </div>

                </div>

                </div>

                </div>

  



<footer className="site-footer">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					&copy; <a >Mental Flex</a> 2023.

                    
					
					Email <a href="mailto:info@mental-flex.com">info@mental-flex.com</a>
					
				</div>
				
			</div>
		</div>
	</footer>
</div>
        
)

}

export default Purchase3ES