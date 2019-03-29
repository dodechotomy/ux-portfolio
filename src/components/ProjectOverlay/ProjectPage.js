import React from 'react';
import {TagList} from "../TagList";
import {tabIndex} from "../../util"
import {ContentBlock} from "./ContentBlock";

export function ProjectPage(props) {

  const content = [];
  if (props.content) {
    props.content.forEach(block => {
      content.push(<ContentBlock key={block.heading} {...block}></ContentBlock>)
    });
  }
  return (<article id={props.hash} {...tabIndex(props.disabled)} disabled={props.disabled} className="backgroundColor project page">
    <div role="presentation" className="grid">
      <header>
        <h3 id={props.headingID}>{props.name}</h3>
        <TagList tags={props.tags}/>
        <p className="thumbnailDescription">{props.description}</p>
      </header>
      {content}
      <div role="presentation" className="endOfPage backgroundColor"/>
    </div>
  </article>);
}
