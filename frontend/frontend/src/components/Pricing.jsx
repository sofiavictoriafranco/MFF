import React from "react"
import {useTranslation} from 'react-i18next'




const Pricing = () => {

    const [t, i18n] = useTranslation("global")


    return(

        <section className="pricing" id="pricing">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>Our Packages</h3>
						<p>Avocent deditum long</p>
					</div>
				</div>
			</div>



			<div className="row">


				<div className="col-md-3">
					<div className="pricing-table">
						<div className="pricing-header">
							<div className="pt-price">$50<small>/m</small></div>
							<div className="pt-name">{t("pricing.individual1")}</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> {t("pricing.individual2")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.individual3")}</li>
								<li> <br/></li>
								<li> <br/></li>
								<li> <br/></li>
								<li><br/></li>
								<li> <br/></li>
							</ul>




						</div>
						<div className="pricing-footer">

                        <button
            onClick={() => {

				 window.location.href = t("pricing.URL1") 
             
            }}
			className="btn btn-default"
            
          >
           {t("pricing.purchase")}
          </button>
							
						</div>
					</div>
				</div>


                <div className="col-md-3">
					<div className="pricing-table featured">
						<div className="pricing-header">
							<div className="pt-price">$180<small>/m</small></div>
							<div className="pt-name">{t("pricing.individualMonth2")}</div>
							<div className="featured-text">{t("pricing.individualMonth1")}</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> {t("pricing.individualMonth3")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.individualMonth4")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.individualMonth5")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.individualMonth6")}</li>
								<li> <br/></li>
								<li> <br/></li>
								
							</ul>
						</div>
						<div className="pricing-footer">


                        <button
            onClick={() => {

				
				window.location.href = t("pricing.URL2") 
             
            }}
			className="btn btn-default"
            
          >
           {t("pricing.purchase")}
          </button>



							
						</div>
					</div>
				</div>

				<div className="col-md-3">
					<div className="pricing-table">
						<div className="pricing-header">
							<div className="pt-price">$360<small>/m</small></div>
							<div className="pt-name">{t("pricing.individualMonthx2-1")}</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> {t("pricing.individualMonthx2-2")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.individualMonthx2-3")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.individualMonthx2-4")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.individualMonthx2-5")}</li>
								<li> <br/></li>
								<li> <br/></li>
								
							</ul>
						</div>
						<div className="pricing-footer">


                        <button
            onClick={() => {

				window.location.href = t("pricing.URL3") 

				
            }}
			className="btn btn-default"
            
          >
           {t("pricing.purchase")}
          </button>
							
						</div>
					</div>
				</div>


				<div className="col-md-3">
					<div className="pricing-table">
						<div className="pricing-header">
							<div className="pt-price">$99.99<small>/m</small></div>
							<div className="pt-name">Enterprise</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> Unlimited Space</li>
								<li><i className="fa fa-check"></i> Unlimited Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-check"></i> Free Email</li>
								<li><i className="fa fa-check"></i> Free cPanel</li>
								<li><i className="fa fa-check"></i> Free FTP</li>
								<li><i className="fa fa-check"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-default">Purchase</a>
						</div>
					</div>
				</div>


			</div>

            <br/>


            <div className="row">


				<div className="col-md-3">
					
				</div>

				<div className="col-md-3">
					<div className="pricing-table">
						<div className="pricing-header">
							<div className="pt-price">$65<small>/m</small></div>
							<div className="pt-name">{t("pricing.couples1")}</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> {t("pricing.couples2")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.couples3")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.couples4")}</li>
								<li> <br/></li>
								<li><br/></li>
                                <li><br/></li>
								
								
							</ul>
						</div>
						<div className="pricing-footer">

                        <button
            onClick={() => {

				window.location.href = t("pricing.URL4") 
             
            }}
			className="btn btn-default"
            
          >
           {t("pricing.purchase")}
          </button>
							
						</div>
					</div>
				</div>

				<div className="col-md-3">
					<div className="pricing-table featured">
						<div className="pricing-header">
							<div className="pt-price">$416<small>/m</small></div>
							<div className="pt-name">{t("pricing.couplesPackage1")}</div>
							<div className="featured-text">{t("pricing.individualMonth1")}</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> {t("pricing.couplesPackage2")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.couplesPackage3")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.couplesPackage4")}</li>
								<li><i className="fa fa-check"></i> {t("pricing.couplesPackage5")}</li>
								<li><br/></li>
								<li><br/></li>
								
							</ul>
						</div>
						<div className="pricing-footer">


                        <button
            onClick={() => {

				window.location.href = t("pricing.URL5") 
             
            }}
			className="btn btn-default"
            
          >
           {t("pricing.purchase")}
          </button>
							
						</div>
					</div>
				</div>

				<div className="col-md-3">
					
				</div>


			</div>






                 
			




		</div>
	</section>
        
    )
}

export default Pricing