import React from 'react';
import { Link } from 'gatsby'
import  Creative from './Creative';
import g1 from "../../../static/img/g1.jpeg";
import a1 from "../../../static/img/about.jpeg";
import a2 from "../../../static/img/about2.jpeg";
import talk from "../../img/talk.jpg";

const Portraits =  () => (
<div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="/portfolio/hair-and-makeup/">
                    <img src={talk} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">HAIR AND MAKE UP</p>
                    <p className="subtitle is-6">PORTRAITS</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/all-that-glitters">
                    <img src={g1} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">ALL THAT GLITTERS</p>
                    <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <Creative />
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="/portfolio/hair-and-makeup/">
                    <img src={a1} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">VALENTINE DAY PORTRAIT</p>
                    <p className="subtitle is-6">PORTRAITS</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/all-that-glitters">
                    <img src={a2} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">VALENTINE DAY SHOOT</p>
                    <p className="subtitle is-6">PORTRAITS</p>
                </div>
            </div>
        </div>
    </div>

</div>
)

export default Portraits
