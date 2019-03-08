import React from 'react';
import { Link } from 'gatsby';
import g1 from "../../../static/img/g1.jpeg";
import g2 from "../../../static/img/glam1.jpeg";
import g3 from "../../../static/img/glam2.jpeg";
import g4 from "../../../static/img/glam3.jpeg";
import g5 from "../../../static/img/glam4.jpeg";
import j1 from "../../img/jul23.jpg";


const Creative =  () => (
<div>
    <div className="row" >
        <div className="col-md-4">
            <div className="album-list-item">
                <Link className="ali-link" to="/portfolio/july-photoshoot">
                    <div className="ali-img-wrap">
                        <img  src={j1} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">JULY PHOTOSHOOT</h2>
                        <div className="ali-meta">CREATIVE - PORTRAITS</div>
                    </div>
                </Link> 
            </div>
        </div>
        <div className="col-md-4">
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/glamour/">
                    <div className="ali-img-wrap">
                        <img  src={g2} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">GLAMOUR</h2>
                        <div className="ali-meta">CREATIVE - PORTRAITS</div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="album-list-item">
                <Link className="ali-link" to="/portfolio/glamour-1">
                    <div className="ali-img-wrap">
                        <img  src={g3} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">GLAMOUR</h2>
                        <div className="ali-meta">CREATIVE - PORTRAITS</div>
                    </div>
                </Link> 
            </div>
        </div>
    </div>
    <div className="row align-items-start mt-5">
        <div  className="col-md-4">
            <div className="album-list-item">
                <Link className="ali-link" to="/portfolio/glamour-2">
                    <div className="ali-img-wrap">
                        <img  src={g4} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">GLAMOUR</h2>
                        <div className="ali-meta">CREATIVE - PORTRAITS</div>
                    </div>
                </Link> 
            </div>
        </div>
        <div  className="col-md-4">
            <div className="album-list-item">
                <Link className="ali-link" to="portfolio/glamour-3">
                    <div className="ali-img-wrap">
                        <img  src={g5} alt="Placeholder image" />
                    </div>
                    <div className="ali-caption">
                        <h2 className="ali-title">GLAMOUR</h2>
                        <div className="ali-meta">CREATIVE - PORTRAITS</div>
                    </div>
                </Link> 
            </div>
        </div>
        <div className="col-md-4">
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
    </div>
</div>
)

export default  Creative;