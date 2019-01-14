import React from 'react';
import {Link} from 'gatsby';
import b2 from "../../../static/img/b2.jpg";
import b3 from "../../../static/img/b3.jpg";
import b4 from "../../../static/img/b4.jpg";
import b6 from "../../../static/img/b6.jpg";

const Fashion =  () => (
<div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/am-counting-my-blessings">
                    <img src={b2} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">AM COUNTING MY BLESSINGS</p>
                    <p className="subtitle is-6">FASHION - PHOTOGRAPHY</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/am-counting-my-blessings/">
                    <img src={b3} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">AM COUNTING MY BLESSINGS</p>
                    <p className="subtitle is-6">FASHION - PHOTOGRAPHY</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/am-counting-my-blessings/">
                    <img src={b4} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">AM COUNTING MY BLESSINGS</p>
                    <p className="subtitle is-6">FASHION - PHOTOGRAPHY</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/am-counting-my-blessings/">
                    <img src={b6} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">AM COUNTING MY BLESSINGS</p>
                    <p className="subtitle is-6">FASHION - PHOTOGRAPHY</p>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default Fashion
