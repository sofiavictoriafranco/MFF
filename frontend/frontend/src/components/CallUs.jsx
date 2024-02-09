import React from "react"
import {useTranslation} from 'react-i18next'




const CallUs = () => {

    const [t, i18n] = useTranslation("global")


    return(

        <section className="call-us">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h3>{t("callus.call1")}</h3>
					<a href="#contact" className="btn btn-default-o btn-lg">{t("callus.call2")}</a>
				</div>
			</div>
		</div>
	</section>
        
    )
}

export default CallUs