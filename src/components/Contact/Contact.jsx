import React from "react"
import {useTranslation} from 'react-i18next'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

    const [t, i18n] = useTranslation("global")

    const form = useRef(); 

  const sendEmail = async (e) => {
    e.preventDefault();
  
    try {
      const result = await emailjs.sendForm(
        'service_ds5s0aa',
        'template_idb5yvp',
        form.current,
        'FMzflINRgRtaizQGN'
      );
  
      console.log(result.text);
      form.current.reset();
      toast.success('Email sent successfully', {
        position: 'bottom-left',
      });
    } catch (error) {
      console.log(error.text);
      toast.error('Failed to send email', {
        position: 'bottom-left',
      });
    }
  };


    return(


        <section className="contact" id="contact">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>{t("contact.contact1")}</h3>
						<p>{t("contact.contact2")}</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6">
			

<form  className="contact-form"ref={form} onSubmit={sendEmail}>
      <label >{t("contact.name")}</label>
      <input className="form-control" type="text" name="user_name" />
      <label>Email</label>
      <input className="form-control" type="email" name="user_email"  />
      <label>{t("contact.message")}</label>
      <textarea className="form-control" rows="10"  name="message" />
      <button className="btn btn-main btn-lg" type="submit" value="Send" data-loading-text="<i class='fa fa-spinner fa-spin'></i> Sending..."><i className="fa fa-paper-plane "></i>
      {t("contact.send")}</button>
    </form>


				</div>
				<div className="col-md-6">
					<p> {t("contact.description")}</p>
					<address>
						<strong>info@mental-flex.com</strong><br/>
						
						<abbr title="Phone">P:</abbr> (+54) 91150451372
					</address>
				</div>
			</div>
		</div>
	</section>

       
        
    )
}

export default Contact