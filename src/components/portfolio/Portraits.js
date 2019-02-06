import React from 'react';

import g1 from "../../../static/img/g1.jpeg";
import a1 from "../../../static/img/about.jpeg";
import a2 from "../../../static/img/about2.jpeg";
import talk from "../../img/talk.jpg";

const Portraits =  () => (
<div>
    <div className="row">
        <div className="col-md-4 ">
            <div className="card">
                <div className="card-img-top">
                    <a to="/portfolio/hair-and-makeup/">
                        <img  src={talk} alt="Placeholder image" />
                    </a>
                </div>
                <div className="card-body t">
                    <p className="title is-4">HAIR AND MAKE UP</p>
                    <p className="subtitle is-6">PORTRAITS</p>
                </div> 
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="card">
            <a to="portfolio/all-that-glitters">
                <img className="card-img-top" src={g1} alt="Placeholder image" />
            </a>
            <div className="card-body t">
                <div className="card-text">
                    <p className="title is-4">ALL THAT GLITTERS</p>
                    <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                </div>
            </div>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="card">
            <a to="/portfolio/hair-and-makeup/">
                <img className="card-img-top" src={a1} alt="Placeholder image" />
            </a>
            <div className="card-body t">
                <div className="card-text">
                    <p className="title is-4">VALENTINE DAY PORTRAIT</p>
                    <p className="subtitle is-6">PORTRAITS</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-4 ">
            <div className="card">
                <a to="portfolio/all-that-glitters">
                    <img className="card-img-top" src={a2} alt="Placeholder image" />
                </a>
                <div className="card-body t">
                    <div className="card-text">
                        <p className="title is-4">VALENTINE DAY SHOOT</p>
                        <p className="subtitle is-6">PORTRAITS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default Portraits
