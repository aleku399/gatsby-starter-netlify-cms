import React from 'react'

import  s1 from "../../static/img/insta1.jpg"
import s2 from "../../static/img/insta2.jpg"
import s3 from "../../static/img/insta3.jpg"
import s4 from "../../static/img/insta4.jpg"
import s5 from "../../static/img/insta5.jpg"
import s6 from "../../static/img/insta6.jpg"
import s7 from "../../static/img/insta7.jpg"
import s8 from "../../static/img/insta8.jpg"
import s10 from "../../static/img/insta10.jpg"

export default class Insta extends React.Component {
  render() {
   // const { data } = this.props
   // const { edges: posts } = data.allMarkdownRemark

    return (
    <ul>
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s7} alt="instagram_pics"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s8} alt="instagram_pics"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s10} alt="instagram_pics"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s1} alt="instagram_pics"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s2} alt="instagram_pics"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s3} alt="instagram_pics"/>
            </a>
        </li>    
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s4} alt="instagram_pics"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s5} alt="instagram_pics"/>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/bettinahtianah"  target="_blank">
                <img src={s6} alt="instagram_pics"/>
            </a>
        </li>
    </ul>
    )
  }
}

