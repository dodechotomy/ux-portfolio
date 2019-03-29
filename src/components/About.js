import React from 'react';
import {tabIndex} from "../util";
import {aboutText,emailLink} from "../portfolio-content";

import ReactMarkdown from 'react-markdown';

export function About(props) {
  const active = props.hash === "about";
  const disabled = !active;
  const className = props.className + " about overlay" + (
    active
    ? " active"
    : "");
  const closeOverlay = () => {
    window.location.hash = "";
  };
  const headingID = "heading-about";
  return (<section aria-labelledby={headingID} className={className}>
    <div role="button" aria-label="Close" className="closeOverlay" onClick={closeOverlay}>
      <button role="presentation" disabled={disabled} {...tabIndex(disabled)}>╳</button>
    </div>
    <article id="about" {...tabIndex(disabled)} disabled={disabled} className="backgroundColor page">
        <header>
          <h3 id={props.headingID}>About Me</h3>
        </header>
        <ReactMarkdown source={aboutText}/>
         {emailLink}
        <div role="presentation" className="endOfPage backgroundColor"/>
    </article>
  </section>);
}
