import React from 'react';
import {TagList} from "../TagList"
import {tabIndex} from "../../util"

export function ProjectTile(props) {
  const className = "tile thumbnailImage " + props.className + (
    props.activeOverlay
    ? " active"
    : "");
  const tileTitle = "tile-title-" + props.hash;
  const style = {
    ...props.style,
    backgroundImage: "url(" + props.thumbnail.src + ")"
  };
  const linkProps = {
    href: "#" + props.hash,
    id: "tile-" + props.hash,
    style: style,
    className: className,
    disabled: props.disabled,
    ...tabIndex(props.disabled)
  };
  return (<a {...linkProps} aria-labelledby={tileTitle}>
    <div className="backgroundColor">
      <h3 id={tileTitle}>
        {props.name}
      </h3>
      <TagList tags={props.tags}/>
      {props.description && <p className="thumbnailDescription">{props.description}</p >}
    </div>
  </a >);
}
