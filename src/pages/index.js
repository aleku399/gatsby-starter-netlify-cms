import React from 'react'
import Layout from '../components/Layout'
import App from '../components/Carousel'

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

const arrImages =  [j2, j3, j4, j5, j7]

export default class Landing extends React.Component {
    render() {
      return (
    <Layout>
        <div className="container"> 
            <div className="content-wrap"> 
               <App images={arrImages} />
            </div>
        </div> 
    </Layout>
      )
    }
  }
