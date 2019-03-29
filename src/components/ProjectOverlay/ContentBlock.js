import React from 'react';
import {VisualBlock} from "./VisualBlock"
const ReactMarkdown = require('react-markdown');


export function ContentBlock(props) {
  const heading = props.heading
    ? <h4>{props.heading}</h4>
    : null;
  const visualsBlock = props.visuals
    ? (props.visuals.map(visual => (<VisualBlock key={visual.title} {...visual} className="contentVisual"/>)))
    : null;
  const singleVisual = props.visual
    ? <VisualBlock key={props.heading + "visual"} {...props.visual} className="contentVisual"/>
    : null;
  const style = props.visuals
    ? {
      gridRow: "span " + props.visuals.length
    }
    : null;
  return (<React.Fragment>
    <section key={props.heading} style={style} className={"contentSection" + (
        props.visual || props.visuals
        ? ""
        : " fullRow")}>
      {heading}
      {
        props.type === "md"
          ? <ReactMarkdown source={props.text}/>
          : <p>{props.text}</p>
      }

    </section>
    {singleVisual}
    {visualsBlock}
  </React.Fragment>);
}
