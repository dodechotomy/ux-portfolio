import React, {useState} from 'react';
import {FilterSelect} from "./FilterSelect.js";
import {ProjectTile} from "./ProjectTile.js";
import {ProjectOverlay} from "../ProjectOverlay/ProjectOverlay.js"

export function FilteredTileGrid(props) {
  const [activeFilters, setActiveFilters] = useState([]);

  const updateHash = (newHash) => {
    window.location.hash = newHash;
  }

  const handleChange = (event) => {
    let target = event.target.value;
    let newFilters;
    if (activeFilters.includes(target)) {
      newFilters = activeFilters.filter(i => i !== target);
    } else {
      newFilters = activeFilters.concat(target);
    }
    setActiveFilters(newFilters);
  }

  let activeItems = props.items;
  let inactiveItems = [];
  if (activeFilters.length > 0) {
    const sharesTag = item => item.tags.some(tag => activeFilters.includes(tag));
    activeItems = props.items.filter(sharesTag);
    inactiveItems = props.items.filter(item => !sharesTag(item));
  }
  const allItems = [
    ...activeItems,
    ...inactiveItems
  ];
  let emptyListMessage = null;
  if (activeItems.length === 0) {
    emptyListMessage = (<span class="placeholder_message">
      Whoops, there aren't any projects with that tag!
      <br/>
      That tag probably shouldn't even be here.
    </span>);
  }

  return (<section disabled={props.disabled}>
    <FilterSelect disabled={props.disabled} value={activeFilters} onClick={handleChange} tags={props.tags}/>
    <ul className="tileList" aria-label="Projects list">
      {
        allItems.map((item, index) => {
          const inactive = inactiveItems.includes(item);
          return (<ProjectTile updateHash={updateHash} disabled={props.disabled} className={inactive
              ? "inactive"
              : ""} key={item.name} id={index} {...item}/>);
        })
      }
    </ul>
    {emptyListMessage}
    <div className="projectOverlays">
      {
        allItems.map((item, index) => {
          return (<ProjectOverlay key={item.name} id={index} active={item.hash === props.hash} {...item}/>);
        })
      }
    </div>
  </section>);

}
