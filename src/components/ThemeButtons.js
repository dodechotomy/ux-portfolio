import React from 'react';

export function ThemeButtons(props) {
  return (<div className="themeButtons">
    <button onClick={props.changeTheme}>mix it up</button>
    <button aria-pressed={props.dark} className={"toggleButton vertical " + (
        props.dark
        ? "selected"
        : "")} onClick={props.toggleDarkMode}>
      dark mode
    </button>
  </div>);
}
