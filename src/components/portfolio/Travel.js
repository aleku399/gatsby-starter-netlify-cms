import React from 'react';
import { Link } from 'gatsby'
import z1 from '../../../static/img/z1.jpeg'
import z2 from '../../../static/img/z2.jpeg'


const Travel =  () => (
<div className="row">
    <div className="col-md-4" >
        <div className="card"  style={{width: "30rem" }}>
            <Link to="/portfolio/hair-and-makeup/">
                <img className="card-img-top" src={z1} alt="Placeholder image" />
            </Link>
            <div className="card-body t">
                <div className="card-text">
                    <p className="title is-4">ZANZIBAR TALES</p>
                    <p className="subtitle is-6">fashion and travel</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-4 ">
        <div className="card" style={{width: "30rem" }}>
            <Link to="portfolio/all-that-glitters">
                <img className="card-img-top" src={z2} alt="Placeholder image" />
            </Link>
            <div className="card-body t">
                <div className="card-text">
                    <p className="title is-4">ZANZIBAR TALES</p>
                    <p className="subtitle is-6">fashion and travel</p>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default Travel
