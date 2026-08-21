import React from "react";
function Education() {
    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 ">
                    <img src="media/images/education.svg"/>
                </div>
                <div className="col-6">
                    <h3 >Free and open market education</h3>
                    <p className="mt-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=""  style={{textDecoration:"none"}}> Versity <i className="fa-solid fa-arrow-right-long"></i></a>

                    <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;