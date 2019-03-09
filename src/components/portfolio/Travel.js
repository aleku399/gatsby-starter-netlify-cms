import React from 'react';
import { Link } from 'gatsby';
import z1 from '../../../static/img/z1.jpeg'
import z2 from '../../../static/img/z2.jpeg'


const Travel =  () => (
<div className="row">
    <div className="col-md-4" >
        <div className="album-list-item">
            <Link className="ali-link" to="portfolio/zanzibar-tales-interior-1">
                <div className="ali-img-wrap">
                    <img  src={z1} alt="Placeholder image" />
                </div>
                <div className="ali-caption">
                    <h2 className="ali-title">ZANZIBAR TALES</h2>
                    <div className="ali-meta">fashion and travel</div>
                </div>
            </Link> 
        </div>
    </div>
    <div className="col-md-4 ">
        <div className="album-list-item">
            <Link className="ali-link" to="portfolio/zanzibar-tales-interior">
                <div className="ali-img-wrap">
                    <img  src={z2} alt="Placeholder image" />
                </div>
                <div className="ali-caption">
                    <h2 className="ali-title">ZANZIBAR TALES</h2>
                    <div className="ali-meta">fashion and travel</div>
                </div>
            </Link> 
        </div>
    </div>
</div>
)

export default Travel
