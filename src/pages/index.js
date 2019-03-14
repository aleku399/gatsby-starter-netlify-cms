import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/Layout'
// import Slider  from '../components/slider';

import j1 from "../july/jul29.jpg"
import j2 from "../july/jul30.jpg"
import j3 from "../july/jul31.jpg"
import j4 from "../july/jul28.jpg"
import j5 from "../july/jul33.jpg"
import j7 from "../july/jul27.jpg"
import j8 from "../july/jul32.jpg"
import j9 from "../july/jul27.jpg"
import j10 from "../july/jul20.jpg"
import j11 from "../july/jul24.jpg"
import j6 from "../july/jul22.jpg"
import s6 from "../../static/img/insta6.jpg"
import s7 from "../../static/img/insta7.jpg"
import s8 from "../../static/img/insta8.jpg"
import s10 from "../../static/img/insta10.jpg"

const arrImages =  [j2, j3, j4, j5, j7, j1, j8, j6, j9, j10, j11]

export default class Landing extends React.Component {
    render() {
      return (
    <Layout>
        <div className="container"> 
            <div className="content-wrap">      
                <Carousel showThumbs={false} dynamicHeight  infiniteLoop autoPlay>
                    <div>
                        <img src={s8} />
                    </div>
                    <div>
                        <img src={s7} />
                    </div>
                    <div>
                        <img src={s10} />
                    </div>
                </Carousel>
            </div>
        </div> 
    </Layout>
      )
    }
  }

 
  