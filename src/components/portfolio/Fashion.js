import React from 'react';
import b2 from "../../../static/img/b2.jpg";
import b3 from "../../../static/img/b3.jpg";
import b4 from "../../../static/img/b4.jpg";
import b6 from "../../../static/img/b6.jpg";

const Fashion =  () => (
<div>
    <div className="row">
        <div className="col-md-4"> 
            <div className="card" >
                    <img className="card-img-top" src={b2} alt="Placeholder image" />
                <div className="card-body t">
                    <div className="card-text">
                        <p className="title is-4">AM COUNTING MY BLESSINGS</p>
                        <p className="subtitle is-6">FASHION - PHOTOGRAPHY</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card"  >
                <img className="card-img-top" src={b3} alt="Placeholder image" />
                <div className="card-body t">
                    <div className="card-text">
                        <p className="title is-4">AM COUNTING MY BLESSINGS</p>
                        <p className="subtitle is-6">FASHION - PHOTOGRAPHY</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card" >
                <img className="card-img-top" src={b4} alt="Placeholder image" />
                <div className="card-body t" >
                    <div className="card-text">
                        <p className="title is-4">AM COUNTING MY BLESSINGS</p>
                        <p className="subtitle is-6">FASHION - PHOTOGRAPHY</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-md-4">
            <div className="card" >
                <img className="card-img-top" src={b6} alt="Placeholder image" />
                <div className="card-body t">
                    <div className="card-text">
                        <p className="title is-4">AM COUNTING MY BLESSINGS</p>
                        <p className="subtitle is-6">FASHION - PHOTOGRAPHY</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)

export default Fashion
