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
							<div className="pt-price">$9.99<small>/m</small></div>
							<div className="pt-name">Standard</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> 2GB Space</li>
								<li><i className="fa fa-check"></i> 10GB Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-times"></i> Free Email</li>
								<li><i className="fa fa-times"></i> Free cPanel</li>
								<li><i className="fa fa-times"></i> Free FTP</li>
								<li><i className="fa fa-times"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-default">Purchase</a>
						</div>
					</div>
				</div>

				<div className="col-md-3">
					<div className="pricing-table">
						<div className="pricing-header">
							<div className="pt-price">$19.99<small>/m</small></div>
							<div className="pt-name">Premium</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> 5GB Space</li>
								<li><i className="fa fa-check"></i> 50GB Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-check"></i> Free Email</li>
								<li><i className="fa fa-times"></i> Free cPanel</li>
								<li><i className="fa fa-times"></i> Free FTP</li>
								<li><i className="fa fa-times"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-default">Purchase</a>
						</div>
					</div>
				</div>

				<div className="col-md-3">
					<div className="pricing-table featured">
						<div className="pricing-header">
							<div className="pt-price">$49.99<small>/m</small></div>
							<div className="pt-name">Developer</div>
							<div className="featured-text">Best Value</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> 20GB Space</li>
								<li><i className="fa fa-check"></i> 1TB Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-check"></i> Free Email</li>
								<li><i className="fa fa-check"></i> Free cPanel</li>
								<li><i className="fa fa-check"></i> Free FTP</li>
								<li><i className="fa fa-times"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-main">Purchase</a>
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
							<div className="pt-price">$19.99<small>/m</small></div>
							<div className="pt-name">Premium</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> 5GB Space</li>
								<li><i className="fa fa-check"></i> 50GB Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-check"></i> Free Email</li>
								<li><i className="fa fa-times"></i> Free cPanel</li>
								<li><i className="fa fa-times"></i> Free FTP</li>
								<li><i className="fa fa-times"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-default">Purchase</a>
						</div>
					</div>
				</div>

				<div className="col-md-3">
					<div className="pricing-table featured">
						<div className="pricing-header">
							<div className="pt-price">$49.99<small>/m</small></div>
							<div className="pt-name">Developer</div>
							<div className="featured-text">Best Value</div>
						</div>
						<div className="pricing-body">
							<ul>
								<li><i className="fa fa-check"></i> 20GB Space</li>
								<li><i className="fa fa-check"></i> 1TB Bandwidth</li>
								<li><i className="fa fa-check"></i> Free Domain</li>
								<li><i className="fa fa-check"></i> Free Email</li>
								<li><i className="fa fa-check"></i> Free cPanel</li>
								<li><i className="fa fa-check"></i> Free FTP</li>
								<li><i className="fa fa-times"></i> Free Support</li>
							</ul>
						</div>
						<div className="pricing-footer">
							<a href="#" className="btn btn-main">Purchase</a>
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