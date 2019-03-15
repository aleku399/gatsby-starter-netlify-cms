import React from 'react'
import Layout from '../components/Layout'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";
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

const arrImages =  [j2, j3, j4, j5, j7, j1, j8, j6, j9, j10, j11,s7, s8, s10]

export default class Landing extends React.Component {
    render() {
      return (
    <Layout>
        <div className="container"> 
            <div className="content-wrap"> 
                <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img className="d-block w-100" src={s7} alt="First slide" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img className="d-block w-100" src={s8} alt="Second slide" />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img className="d-block w-100" src={s10} alt="Third slide" />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                            <MDBView>
                                <img className="d-block w-100" src={j7} alt="Mattonit's item" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>
        </div> 
    </Layout>
      )
    }
  }

 
  