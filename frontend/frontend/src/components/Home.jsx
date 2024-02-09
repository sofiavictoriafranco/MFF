import React from "react"
import {useTranslation} from 'react-i18next'





const Home = () => {

    const [t, i18n] = useTranslation("global")


    return(

        <section class="home" id="home" data-stellar-background-ratio="0.4">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="st-home-unit">
						<div class="hero-txt">
							<p class="hero-work">{t("home.title1")}</p>
							<h2 class="hero-title">{t("home.title2")}</h2>
							<a href="#contact" class="btn btn-main btn-lg">{t("home.NavBar-Contact")}</a>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div class="mouse-icon">
			<div class="wheel"></div>
		</div>
	</section>
        
    )
}

export default Home