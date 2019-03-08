import React from 'react';
import { Link } from 'gatsby';
import g1 from "../../../static/img/g1.jpeg";
import a1 from "../../../static/img/about.jpeg";
import a2 from "../../../static/img/about2.jpeg";
import talk from "../../img/talk.jpg";

const Portraits =  () => (
<div>
    <div className="row">
        <div className="col-md-4 ">
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/hair-and-makeup">
                    <div className="ali-img-wrap">
                        <img  src={talk} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">HAIR AND MAKE UP</h2>
                        <div className="ali-meta">PORTRAITS</div>
                    </div>
                </Link> 
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/all-that-glitters-1">
                    <div className="ali-img-wrap">
                        <img  src={g1} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">ALL THAT GLITTERS</h2>
                        <div className="ali-meta">CREATIVE - PORTRAITS</div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="album-list-item">
                <Link className="ali-link"  to="portfolio/valentine-shoot">
                    <div className="ali-img-wrap">
                        <img className="card-img"  src={a1} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">VALENTINE DAY PORTRAIT</h2>
                        <div className="ali-meta">PORTRAITS</div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-4 ">
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/valentine-shoot">
                    <div className="ali-img-wrap">
                        <img className="card-img-top" src={a2} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">VALENTINE DAY SHOOT</h2>
                        <div className="ali-meta">PORTRAITS</div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
</div>
)

export default Portraits
