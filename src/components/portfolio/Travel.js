import React from 'react';
import { Link } from 'gatsby'
import z1 from '../../../static/img/z1.jpeg'
import z2 from '../../../static/img/z2.jpeg'


const Travel =  () => (
<div>
<div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="/portfolio/hair-and-makeup/">
                    <img src={z1} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">ZANZIBAR TALES</p>
                    <p className="subtitle is-6">fashion and travel</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <Link to="portfolio/all-that-glitters">
                    <img src={z2} alt="Placeholder image" />
                </Link>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="title is-4">ZANZIBAR TALES</p>
                    <p className="subtitle is-6">fashion and travel</p>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default Travel
