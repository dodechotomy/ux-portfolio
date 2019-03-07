import React from 'react';
import {tabIndex} from "../util.js"

export function ToggleButton(props) {
  const className = props.className + (
    props.selected
    ? " selected"
    : " unselected");
  const {
    tag,
    selected,
    ...buttonProps
  } = {
    ...props,
    className: className,
    ...tabIndex(props.disabled)
  };
  return (<button {...buttonProps} aria-pressed={selected}>
    {tag}
  </button>);
}
