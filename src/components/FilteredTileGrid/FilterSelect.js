import React from 'react';
import {ToggleButton} from "../ToggleButton"

export function FilterSelect(props) {
  const buttons = props.tags.map(tag => {
    const tagProps = {
      tag: tag,
      selected: props.value.includes(tag),
      onClick: props.onClick,
      disabled: props.disabled,
      value: tag,
      name: "filter",
      title: "show " + tag + " projects",
      className: "toggleButton horizontal"
    };
    return <ToggleButton {...tagProps} key={tag}/>
  })
  return (<div aria-label="Filter by" className="filterButtons">
    <span className="filterLabel">Filter Projects: </span>{buttons}
  </div>);
}
