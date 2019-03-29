import React from 'react';
import {tabIndex} from "../../util"
import {ProjectPage} from "./ProjectPage"

export function ProjectOverlay(props) {
  const closeOverlay = () => {
    window.location.hash = "";
  };
  const className = "overlay " + (
    props.active
    ? " active"
    : "");
  const disabled = !props.active;
  const headingID = "heading-" + props.hash;
  return (<section aria-labelledby={headingID} className={className}>
    <div role="button" aria-label="Close" className="closeOverlay" onClick={closeOverlay}>
      <button role="presentation" disabled={disabled} {...tabIndex(disabled)}>╳</button>
    </div>
    <ProjectPage headingID={headingID} disabled={disabled} {...props}/>
  </section>);
}
