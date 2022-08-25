import React from 'react';
import './article.css';

const Article = ({ imgUrl, name, text }) => (
  <div className="web__group-container_article">
    <div className="web__group-container_article-image">
      <img src={imgUrl} alt="img_image" />
    </div>
    <div className="web__group-container_article-content">
      <div>
        <p>{name}</p>
        <h3>{text}</h3>
      </div>
      <p>Explore the group</p>
    </div>
  </div>
);

export default Article;