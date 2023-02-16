import './Post.css'
import React from 'react';

import michelle from '../images/Michelle.png'

import PostButton from './PostButton.js'
export default function Post(){
    return(
        <div className="post">
            <div className="post-container">
                <h1 className="headline-of-post">ytfhgff</h1>
                <div className="image-and-content">
                    <img src={michelle} className="post-img" alt=""/>
                    <div className="total-content">                        
                        <p className="contents">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised </p>
                        <p className="link" hidden></p>
                        <p className="evbex-value" hidden>0</p>
                        <p className="source-date"></p>
                    </div>
                </div>
                <div className="orginals">18 January 2022</div>
            </div>
            <div className="button-set">
                <PostButton name="Copy" color="#002B65" corner_radius="0 0 0 8px" iconname="copy"/>
                <PostButton name="Source" color="rgba(219, 51, 49, 0.85)" corner_radius="0 0 0 0" iconname="view_source"/>
                <PostButton name="Linkedin" color="rgba(0, 114, 177, 0.85)" corner_radius="0 0 0 0" iconname="linkedin"/>
                <PostButton name="Twitter" color="rgba(0, 172, 238, 0.85)" corner_radius="0 0 8px 0" iconname="twitter"/>  
                {/* <button className="copy-btn post-btn">
                    <p>Copy</p>
                    <img src="../static/icons/copy.svg" alt="" className="copy"/>
                </button>
                <a href="#" target="_blank" title=''>
                    <button className="view-btn post-btn">
                        <p>View Source</p>
                        <img src="../static/icons/view-source.svg" alt="" className="copy"/>
                    </button>
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url={{news['c2a_link']}}" target="_blank" rel="noreferrer">
                    <button className="linkedin-btn post-btn">
                        <p>Share on <p className="appName">LinkedIn</p></p>
                        <img src="../static/icons/linkedin.svg" alt="" className="copy"/>
                    </button>
                </a>
                <a href="https://twitter.com/intent/tweet?text={{news['article']}}+{{news['text'][:120]}}+...%0Alink: {{news['c2a_link']}}%0A%0AFor more FM related queries visit www.evbex.com" target="_blank" rel="noreferrer">
                    <button className="twitter-btn post-btn">
                        <p>Share on <p className="appName">Twitter</p></p>
                        <img src="../static/icons/twitter.svg" alt="" className="copy"/>
                    </button>
                </a> */}
            </div>
        </div>
    );
}