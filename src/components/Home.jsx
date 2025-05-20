import React from 'react';
import image from "../assets/tailai.webp"


const Home = () => {
    return (
        <div className="home-container">
            {/* First Section */}
            <div className="section-one">
                <h3>Improve your</h3>
                <h1>Productivity</h1>
                <h2>with AI</h2>
                <p>Tailored digital solutions for highly specialized industries that help boost your operations</p>
                <button>We Are The Experts In AI</button>
            </div>

            {/* Second Section */}
            <div className="section-two">
                <div className="logos">
                    <img src="https://www.microsoft.com/favicon.ico" alt="Microsoft Logo" />
                    <img src="https://aws.amazon.com/favicon.ico" alt="AWS Logo" />
                    <img src="https://cloud.google.com/favicon.ico" alt="Google Cloud Logo" />
                    <img src="https://www.sap.com/favicon.ico" alt="SAP Logo" />
                </div>
                <h1>Transform Data into Action with Our Intelligent AI Dashboard</h1>
            </div>

            {/* third Section */}


            <div>
                <img  className="bannerimage" src={image} alt="main image" />

            </div>
        </div>

        


    );
};

export default Home;