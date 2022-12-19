import React from "react";
import "../../stylesheets/HomePage.css";

const LandingHome = () => {
    return (
        <div id='home-whole-container'>
            <div id="home-video-section">
                <div id="video-container">
                    <video className="video" controlsList="nodownload nofullscreen noremoteplayback" muted autoPlay playsInline src="https://rockethood.s3.us-west-2.amazonaws.com/assets/retirement-hero-hq__67df1aeb147a73f52166e1f391f37f0e.mp4" />
                </div>
                <div id="under-video-container">
                    <div id="under-video-text">
                        <div id="top-line">
                            Earn a 1% match.
                        </div>
                        <div id="bottom-line">
                            No employer necessary.
                        </div>
                    </div>
                    <div id="button-container">
                        <a href="https://github.com/kmaikat/robinhood-clone">

                            <button id="home-page-learn-more">Learn More</button>
                        </a>
                    </div>
                </div>
            </div>
            <div id="checkout-section-container">
                <div id="checkout-section-header-container">
                    <div id="checkout-section-header-left">
                        Check out our latest
                    </div>
                    <div id="checkout-section-header-right">
                        <div>
                            1/5
                        </div>
                        <div id="scroll-arrow-container">
                            <div id="scroll-left-button">
                            <i class="fa-solid fa-arrow-left"></i>
                            </div>
                            <div id="scroll-right-button">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default LandingHome;
