import React from 'react';
export function TagList(props) {
  return (<ul className={props.className + " tagList"}>
    {props.tags.map(tag => <li key={tag}>{tag + " "}</li>)}</ul>);
}
