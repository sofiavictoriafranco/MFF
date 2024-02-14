import React, { useEffect } from "react"



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const CongratulationsEN = () => {

   

    useEffect(() => {
        toast.success('Successful purchase!', {
            position: 'bottom-left',
          });
    }, [])

    return(

        <>

        
        <div className="section-title st-center">
						<h3>Congratulations on your purchase! You've invested in your mental health and well-being.</h3>
                        <br/>
                        <h3>Thank you very much for trusting Mental Flex.</h3>
                        <br/>
                        <br/>
                        <br/>
						<p>You will be receiving an email</p>
            <p>with the Google Meet details shortly.</p>
					</div>

               

<div>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
                <button className="btn btn-main btn-lg" style={{ fontSize: '2em', padding: '20px' }} onClick={() => { window.location.href = "https://www.mental-flex.com/" }} data-loading-text="<i class='fa fa-spinner fa-spin'></i> Sending...">
                RETURN
                </button>
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

        </>
    )
}

export default CongratulationsEN