import React from "react"
import {useTranslation} from 'react-i18next'




const Phrase = () => {

    const [t, i18n] = useTranslation("global")


    return(

        <section className="call-2-acction" data-stellar-background-ratio="0.4">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="c2a">
						<h2>{t("phrase.phrase1")}</h2>
                        <h2>{t("phrase.phrase3")}</h2>
						<p>{t("phrase.phrase2")}</p>
						
					</div>
				</div>
			</div>
		</div>
	</section>
        
    )
}

export default Phrase