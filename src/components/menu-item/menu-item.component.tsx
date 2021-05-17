import React from "react";
import { withRouter } from 'react-router-dom';
import "./menu-item.styles.scss";

// `${match.url}${linkUrl}`
const MenuItem: React.FC<any> = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
