import React from "react"
import {useTranslation} from 'react-i18next'




const Phrase = () => {

    const [t, i18n] = useTranslation("global")


    return(

        <section class="call-2-acction" data-stellar-background-ratio="0.4">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="c2a">
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