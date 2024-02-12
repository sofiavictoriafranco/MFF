import React from "react"
import {useTranslation} from 'react-i18next'




const Questions = () => {

    const [t, i18n] = useTranslation("global")


    return(

     
	<section className="faq-sec">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                
                <div className="section-title st-center">
                    <h3>{t("questions.questions2")}</h3>
                    <p>{t("questions.questions3")}</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="faq">
                    <h3><i className="fa fa-question-circle"></i> {t("questions.question1")}</h3>
                    <p>{t("questions.response1")}</p>
                </div>
                <div className="faq">
                    <h3><i className="fa fa-question-circle"></i> {t("questions.question2")}</h3>
                    <p>{t("questions.response2")}</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="faq">
                    <h3><i className="fa fa-question-circle"></i> {t("questions.question5")}</h3>
                    <p>{t("questions.response5")}</p>
                </div>
                <div className="faq">
                    <h3><i className="fa fa-question-circle"></i> {t("questions.question6")}</h3>
                    <p>{t("questions.response6")}</p>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col-md-6">
                <div className="faq">
                    <h3><i className="fa fa-question-circle"></i> {t("questions.question3")}</h3>
                    <p>{t("questions.response3")}</p>
                </div>
                <div className="faq">
                    <h3><i className="fa fa-question-circle"></i> {t("questions.question4")}</h3>
                    <p>{t("questions.response4")}</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="faq">
                    <h3><i className="fa fa-question-circle"></i> {t("questions.question7")}</h3>
                    <p>{t("questions.response7")}</p>
                </div>
                <div className="faq">
                    <h3><i className="fa fa-question-circle"></i> {t("questions.question8")}</h3>
                    <p>{t("questions.response8")}</p>
                </div>
            </div>
        </div>


    </div>
</section>

        
    )
}

export default Questions