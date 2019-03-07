import React, {useState, Component} from 'react';
import $ from 'jquery'
import {projects, navTags} from "./portfolio-content";
// import "node_modules/include-media-export/dist/include-media-1.0.2.min.js"
// import "include-media-export"
// import im from "../node_modules/include-media-export/include-media.js"
import "./App.scss";
import "./themes.scss";
import {resize, resizeAll} from './fixedAspectRatio.js'
import {FilteredTileGrid} from "./components/FilteredTileGrid/FilteredTileGrid.js"
import {TagList} from "./components/TagList.js"
import {tabIndex} from "./util.js"

const email = "mailto:me.scottwilson@gmail.com";


class App extends Component {
  constructor(props) {
    super(props);
    this.themes = [];
    const themeCount = 11;
    for (let i = 0; i < themeCount; i++) {
      this.themes.push(i);
    }

    this.state = {
      theme: Math.floor(Math.random() * themeCount),
      dark: true,
      hash: ""
    };
    this.changeTheme = this.changeTheme.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener("hashchange", this.handleHashChange, false);
    window.addEventListener("keydown", this.handleKeyDown, false);
    $(window).resize(resizeAll);
  }

  parseHash(hash) {
    return hash && (
      hash.startsWith("#")
      ? hash.substring(1)
      : hash);
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      window.location.hash = "";
    }
  };
  render() {
    console.log(this.state.hash);
    const theme = "theme-color" + this.themes[this.state.theme] + (
      this.state.dark
      ? "-dark"
      : "-light");
    const overlayIsActive = projects.some(project => {
      return project.hash === this.state.hash;
    });
    // console.log("overlayIsActive", overlayIsActive);
    // const scrollStyle = overlayIsActive
    //   ? " noscroll"
    //   : ""

    return (<div className={"App backgroundColor " + theme} role="presentation">
      <header role="banner">
        <h1>Scott Wilson</h1>
        <h2>Interaction Design Portfolio</h2>
        <a className="subtitle" href={email}>Hire me!</a>
        <ThemeButtons disabled={overlayIsActive} changeTheme={this.changeTheme} dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}/>
      </header>
      <FilteredTileGrid disabled={overlayIsActive} items={projects} tags={navTags} hash={this.state.hash}/>
      <footer>
        <a href={email}>me.scottwilson@gmail.com</a>
      </footer>
    </div>);
  }
  /*         <Motion
            defaultStyle={{ x: 0 }}
            style={{ x: spring(this.state.theme) }}
          >
            {value => <div>{value.x}</div>}
          </Motion>*/
  changeTheme() {
    const themes = this.themes;
    let newTheme = this.state.theme;
    while (themes.length > 1 && newTheme === this.state.theme) {
      newTheme = Math.floor(Math.random() * themes.length);
    }
    this.setState({theme: newTheme});
  }
  toggleDarkMode() {
    this.setState({
      dark: !this.state.dark
    });
  }
  handleHashChange(event) {
    const newHash = this.parseHash(window.location.hash);
    const oldHash = this.state.hash;
    if (newHash !== this.state.hash) {
      this.setState({hash: newHash});
      if (newHash) {
        const focusElement = document.getElementById(newHash);
        if (focusElement) {
          focusElement.focus();
          focusElement.scrollTo(0, 0);
          document.body.style.overflowY = "hidden";
        }
      } else if (oldHash) {
        const focusElement = document.getElementById("tile-" + oldHash);
        if (focusElement) {
          focusElement.focus();
          document.body.style.overflowY = "";
        }
      }
    }
  }
  componentDidMount() {
    this.handleHashChange();
    setInterval(() => resizeAll(), 1000);
  }
}

function ThemeButtons(props) {
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


export default App;
