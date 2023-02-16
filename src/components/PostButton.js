import './PostButton.css'
import React from 'react';

import view_source from '../icons/view-source.svg';
import twitter from '../icons/twitter.svg';
import linkedin from '../icons/linkedin.svg';
import copy from '../icons/copy.svg';

export default function Posts(props){
    const {name,color,corner_radius,iconname} = props;

  const style = {
    backgroundColor: color,
    borderRadius: corner_radius
  };
  let logo;
  if (iconname === 'view_source'){
    logo = view_source;
  }
  else if (iconname === 'linkedin'){
    logo = linkedin;
  }
  else if (iconname === 'twitter'){
    logo = twitter;
  }
  else{
    logo = copy;
  }
    return(
        <button className="post-btn" style={style}>
            <p>{name}</p>
            <img src={logo} alt="" className="copy"/>
        </button>
    );
}