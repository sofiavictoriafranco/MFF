import React from "react"
import {useTranslation} from 'react-i18next'




const Services = () => {

    const [t, i18n] = useTranslation("global")


    return(

        <section className="service" id="service">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-title st-center">
						<h3>{t("services.services-1")}</h3>
						<p>{t("services.services-2")}</p>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-user"></i></div>
								<strong className="st-feature-title">{t("services.option1")}</strong>
								<p>{t("services.description1")}</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-heart"></i></div>
								<strong className="st-feature-title">{t("services.option2")}</strong>
								<p>{t("services.description2")}</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-comment"></i></div>
								<strong className="st-feature-title">{t("services.option3")}</strong>
								<p>{t("services.description3")}</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className="st-feature">
								<div className="st-feature-icon"><i className="fa fa-book"></i></div>
								<strong className="st-feature-title">{t("services.option4")}</strong>
								<p>{t("services.description4")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        
    )
}

export default Services