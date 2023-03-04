import React from "react";
import finish1 from "../images/finish1.jpg";
import finish2 from "../images/finish2.jpg";
import finish3 from "../images/finish3.jpg";
import finish4 from "../images/finish4.jpg";
import finish5 from "../images/finish5.jpg";
import finish6 from "../images/finish6.jpg";
import finish7 from "../images/finish7.jpg";
import finish8 from "../images/finish8.jpg";
import finish9 from "../images/finish9.jpg";
import finish10 from "../images/finish10.jpg";
import finish11 from "../images/finish11.jpg";
import finish12 from "../images/finish12.jpg";
import finish13 from "../images/finish13.jpg";
import finish14 from "../images/finish14.jpg";
import finish15 from "../images/finish15.jpg";
import finish16 from "../images/finish16.jpg";
import finish17 from "../images/finish17.jpg";
import finish18 from "../images/finish18.jpg";
import finish19 from "../images/finish19.jpg";


export default function Gallery() {

    return (
        <div className="gallery">
             <a name='header'></a>

            <h1>Gallery</h1>

            <hr className="hrline"></hr>


            <div className="row">
                <div className="column">
                    <img src={finish1}></img>
                    <img src={finish2}></img>
                    <img src={finish3}></img>
                </div>
                <div className="column">
                    <img src={finish4}></img>
                    <img src={finish5}></img>
                    <img src={finish6}></img>
                </div>
                <div className="column">
                    <img src={finish7}></img>
                    <img src={finish8}></img>
                    <img src={finish9}></img>
                </div>
                <div className="column">
                    <img src={finish10}></img>
                    <img src={finish11}></img>
                    <img src={finish12}></img>
                </div>
                <div className="column">
                    <img src={finish13}></img>
                    <img src={finish14}></img>
                    <img src={finish15}></img>
                </div>
                <div className="column">
                    <img src={finish16}></img>
                    <img src={finish17}></img>
                    <img src={finish18}></img>
                </div>
                <div className="column">
                    <img src={finish19}></img>
                    <img src={finish5}></img>
                    <img src={finish6}></img>
                </div>

            </div>

            <div className="top">

    <p>
        <a className='backtotop' href='#header'>Back to the top</a>
    </p>

    </div>

    <p className="copyright">Copyright &#169; 2023 Randle Carpentry. All Rights Reserved. </p>

        </div>
    )

}