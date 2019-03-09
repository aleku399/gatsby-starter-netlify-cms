import React from 'react';
import { Link } from 'gatsby';
import b2 from "../../../static/img/b2.jpg";
import b3 from "../../../static/img/b3.jpg";
import b4 from "../../../static/img/b4.jpg";
import b6 from "../../../static/img/b6.jpg";

const Fashion =  () => (
<div>
    <div className="row">
        <div className="col-md-4"> 
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/am-counting-my-blessings/">
                    <div className="ali-img-wrap">
                        <img  src={b2} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">AM COUNTING MY BLESSINGS</h2>
                        <div className="ali-meta">FASHION - PHOTOGRAPHY</div>
                    </div>
                </Link> 
            </div>
        </div>
        <div className="col-md-4">
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/am-counting-my-blessing-2">
                    <div className="ali-img-wrap">
                        <img  src={b3} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">AM COUNTING MY BLESSINGS</h2>
                        <div className="ali-meta">FASHION - PHOTOGRAPHY</div>
                    </div>
                </Link> 
            </div>
        </div>
        <div className="col-md-4">
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/am-counting-my-blessing-3">
                    <div className="ali-img-wrap">
                        <img  src={b4} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">AM COUNTING MY BLESSINGS</h2>
                        <div className="ali-meta">FASHION - PHOTOGRAPHY</div>
                    </div>
                </Link> 
            </div>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-4">
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/am-counting-my-blessing-4">
                    <div className="ali-img-wrap">
                        <img  src={b6} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">AM COUNTING MY BLESSINGS</h2>
                        <div className="ali-meta">FASHION - PHOTOGRAPHY</div>
                    </div>
                </Link> 
            </div>
        </div>
    </div>
</div>
)

export default Fashion
