import React from "react"
import {useTranslation} from 'react-i18next'




const Funfacts = () => {

    const [t, i18n] = useTranslation("global")


    return(

        <section className="funfacts" data-stellar-background-ratio="0.4">
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<div className="funfact">
						<div className="st-funfact-icon"><i className="fa fa-globe"></i></div>
						<div className="st-funfact-counter"><span className="st-ff-count" data-from="0" data-to="22"
								data-runit="1">0</span>+</div>
						<strong className="funfact-title">{t("funfacts.f1")}</strong>
					</div>
				</div>
				<div className="col-md-3">
					<div className="funfact">
						<div className="st-funfact-icon"><i className="fa fa-users"></i></div>
						<div className="st-funfact-counter"><span className="st-ff-count" data-from="0" data-to="1349"
								data-runit="1">0</span>+</div>
						<strong className="funfact-title">{t("funfacts.f2")}</strong>
					</div>
				</div>
				<div className="col-md-3">
					<div className="funfact">
						<div className="st-funfact-icon"><i className="fa fa-clock-o"></i></div>
						<div className="st-funfact-counter"><span className="st-ff-count" data-from="0" data-to="89052"
								data-runit="1">0</span>+</div>
						<strong className="funfact-title">{t("funfacts.f3")}</strong>
					</div>
				</div>
				<div className="col-md-3">
					<div className="funfact">
						<div className="st-funfact-icon"><i className="fa fa-graduation-cap"></i></div>
						<div className="st-funfact-counter"><span className="st-ff-count" data-from="0" data-to="3647"
								data-runit="1">0</span>+</div>
						<strong className="funfact-title">{t("funfacts.f4")}</strong>
					</div>
				</div>
			</div>
		</div>
	</section>
        
    )
}

export default Funfacts