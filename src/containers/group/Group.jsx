import React from 'react';
import Article from '../../components/article/Article';
import { bootcamp, frontend, backend, api, javascript } from './import';
import './group.css';

const Group = () => (
  <div className="web__group section__padding" >
    <div className="web__group-heading">
      <h1 className="gradient__text">Technical Groups Of Community <br /> Explore Them.</h1>
    </div>
    <div className="web__group-container">
      <div className="web__group-container_groupA">
        <Article imgUrl={bootcamp} name="Web Developers" text="A complete bootcamp where you learn all things about web development." />
      </div>
      <div className="web__group-container_groupB">
        <Article imgUrl={frontend} name="Frontend Frontiers" text="Technolgies like - React.js, HTML, CSS, and many more. " />
        <Article imgUrl={backend} name="Backend Brilliants" text="Excel your backend with node and mongoDB. There is always more for you" />
        <Article imgUrl={api} name="Api's Awesome" text="Working with Api's is always awesome, Explore now." />
        <Article imgUrl={javascript} name="Javascript Jumpers" text="Web is like a body without soul, if there is no javascript." />
      </div>
    </div>
  </div>
);

export default Group;