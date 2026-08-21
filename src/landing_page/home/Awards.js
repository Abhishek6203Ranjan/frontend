import React from "react";

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
            <div className="col-6 p-5">
                <img src="media/images/largestBroker.svg"/>
            </div >
            <div className="col-6">
                <h1>Largest Stock Broker In India</h1>
                <p className="mt-5">2+ million Zerodha clients contribute to iver 15% of all retail order volumes in india daily by trading and invasting in: </p>

            <div className="row mt-5">

                <div className="col-6">
                
                <ul>
                    <li>Futures and Options</li>
                    <li>
                        Commodity derivativres
                    </li>
                    <li>Currency derivatives</li>
                </ul>
                </div>

                <div className="col-6">
                <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>
                    Bonds and Go
                </li>
                </ul>

                </div>
                <img  className="mt-4" src="media/images/pressLogos.png"/>

            </div>
            </div>
            </div>
        </div>
     );
}

export default Awards;