import React from "react"
import {useTranslation} from 'react-i18next'




const Home = () => {

    const [t, i18n] = useTranslation("global")


    return(

        <section className="home" id="home" data-stellar-background-ratio="0.4">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="st-home-unit" style={{padding:"258px 0px"}}>
						<div className="hero-txt">
							<p className="hero-work">{t("home.title1")}</p>
							<h2 className="hero-title">{t("home.title2")}</h2>
							<a href="#" className="btn btn-main btn-lg">{t("home.NavBar-Contact")}</a>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div className="mouse-icon">
			<div className="wheel"></div>
		</div>
	</section>
        
    )
}

export default Home