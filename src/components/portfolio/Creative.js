import React from 'react';
import {Link} from 'gatsby';
import g1 from "../../../static/img/g1.jpeg";
import g2 from "../../../static/img/glam1.jpeg";
import g3 from "../../../static/img/glam2.jpeg";
import g4 from "../../../static/img/glam3.jpeg";
import g5 from "../../../static/img/glam4.jpeg";



const Creative =  () => (
<div>
    <div className="row align-items-start" >
        <div className="col-md-4 ">
            <div className="card" style={{width: "30rem"}}>
                <Link to="portfolio/all-that-glitters">
                    <img className="card-img-top" src={g1} alt="Placeholder image" />
                </Link>
                <div className="card-body t">
                    <div className="card-text">
                        <p className="title is-4">ALL THAT GLITTERS</p>
                        <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card" style={{width: "30rem" }}>
                <Link to="portfolio/all-that-glitters">
                    <img className="card-img-top" src={g2} alt="Placeholder image" />
                </Link>
                <div className="card-body t">
                    <div className="card-text">
                        <p className="title is-4">GLAMOUR</p>
                        <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 ">
            <div className="card" style={{width: "30rem" }}>
                <Link to="portfolio/all-that-glitters">
                    <img className="card-img-top" src={g3} alt="Placeholder image" />
                </Link>
                <div className="card-body t">
                    <div className="card-text">
                        <p className="title is-4">GLAMOUR</p>
                        <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row align-items-start mt-5">
            <div  className="col-md-4">
                <div className="card" style={{width: "30rem" }}>
                    <Link to="portfolio/all-that-glitters">
                        <img className="card-img-top" src={g4} alt="Placeholder image" />
                    </Link>
                    <div className="card-body t">
                        <div className="card-text">
                            <p className="title is-4">GLAMOUR</p>
                            <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="col-md-4">
                <div className="card" style={{width: "30rem" }}>
                    <Link to="portfolio/all-that-glitters">
                        <img className="card-img-top" src={g5} alt="Placeholder image" />
                    </Link>
                    <div className="card-body t">
                        <div className="card-text">
                            <p className="title is-4">GLAMOUR</p>
                            <p className="subtitle is-6">CREATIVE - PORTRAITS</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
)

export default  Creative;
 
