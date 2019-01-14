import React from 'react';
import {Link} from 'gatsby';
import g1 from "../../../static/img/g1.jpeg";
import g2 from "../../../static/img/glam1.jpeg";
import g3 from "../../../static/img/glam2.jpeg";
import g4 from "../../../static/img/glam3.jpeg";
import g5 from "../../../static/img/glam4.jpeg";



const Creative =  () => (
<div className="column is-one-third">
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
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/all-that-glitters">
                    <img src={g2} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">GLAMOUR</p>
                    <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/all-that-glitters">
                    <img src={g3} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">GLAMOUR</p>
                    <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/all-that-glitters">
                    <img src={g4} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">GLAMOUR</p>
                    <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/all-that-glitters">
                    <img src={g5} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">GLAMOUR</p>
                    <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default  Creative;
 
