import React, {Component} from 'react';
import {projects, navTags} from "./portfolio-content";
import "./App.scss";
import "./themes.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 7, //Math.floor(Math.random() * themes.length),
      dark: true,
      hash: this.parseHash(window.location.hash)
    };
    this.themes = [];
    for (let i = 0; i < 11; i++) {
      this.themes.push(i);
    }

    this.changeTheme = this.changeTheme.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener("hashchange", this.handleHashChange, false);
  }

  parseHash(hash) {
    return hash && (
      hash.startsWith("#")
      ? hash.substring(1)
      : hash);
  }
  render() {
    console.log(this.state.hash);
    const theme = "theme-color" + this.themes[this.state.theme] + (
      this.state.dark
      ? "-dark"
      : "-light");

    return (<div className={"App backgroundColor " + theme}>
      <header>
        <h1>Scott Wilson</h1>
        <h2>Interaction Design Portfolio</h2>
        <p>Hire me!</p>
      </header>
      <FilteredThumbnailList items={projects} tags={navTags} hash={this.state.hash}/>
      <div className="themeButtons">
        <button onClick={this.changeTheme}>mix it up</button>
        <button className={this.state.dark
            ? "active"
            : ""} onClick={this.toggleDarkMode}>
          dark mode
        </button>
      </div>
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
    if (newHash !== this.state.hash) {
      this.setState({hash: newHash});
    }
  }
}

class FilteredThumbnailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: []
    };

    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    let activeItems = this.props.items;
    let disabledItems = [];
    if (this.state.activeFilters.length > 0) {
      const sharesTag = item => item.tags.some(tag => this.state.activeFilters.includes(tag));
      activeItems = this.props.items.filter(sharesTag);
      disabledItems = this.props.items.filter(item => !sharesTag(item));
    }
    const allItems = [
      ...activeItems,
      ...disabledItems
    ];
    let emptyListMessage = null;
    if (activeItems.length === 0) {
      emptyListMessage = (<span class="placeholder_message">
        Whoops, there aren't any projects with that tag!
        <br/>
        That tag probably shouldn't even be here.
      </span>);
    }

    return (<section>
      <FilterSelect value={this.state.activeFilters} onClick={this.handleChange} tags={this.props.tags}/>
      <ul className="thumbnailList">
        {
          allItems.map((item, index) => {
            return (<ProjectThumbnail className={disabledItems.includes(item)
                ? "disabled"
                : ""} key={item.name} id={index} activeOverlay={item.hash === this.props.hash} {...item}/>);
          })
        }
      </ul>
      {emptyListMessage}
    </section>);
  }
  handleChange(event) {
    let target = event.target.value;
    let newFilters;
    if (this.state.activeFilters.includes(target)) {
      newFilters = this.state.activeFilters.filter(i => i !== target);
    } else {
      newFilters = this.state.activeFilters.concat(target);
    }
    this.setState({activeFilters: newFilters});
  }
}
class FilterSelect extends Component {
  render() {
    return (<div className="filterButtons">
      {this.props.tags.map(tag => this.renderFilterButton(tag))}
    </div>);
  }
  renderFilterButton(currentTag) {
    let active = this.props.value.includes(currentTag);
    return (<button key={currentTag} value={currentTag} onClick={this.props.onClick} name="filter" title={(
        active
        ? "hide "
        : "show ") + currentTag + " projects"} className={"filterButton " + (
        active
        ? "active"
        : "")}>
      {currentTag}
    </button>);
  }
}
class ProjectThumbnail extends Component {
  constructor(props) {
    super(props);

    // this.handleNavigation = this.handleNavigation.bind(this);
  }
  render() {
    const tags = this.props.tags && this.props.tags.map(tag => <li key={tag}>{tag}</li>);
    const imageStyle = {
      backgroundImage: "url('./img/" + this.props.imgref + "')"
    };
    const handleNavigation = event => {
      window.location.hash = this.props.hash;
    };
    return (<button className={"thumbnail " + this.props.className} onClick={handleNavigation}>
      <ProjectTile active={this.props.activeOverlay} style={imageStyle}/>
      <div className="backgroundColor">
        <h3>{this.props.name}</h3>
        {this.props.tags && <ul className="tagList">{tags}</ul>}
        {this.props.description && (<p className="thumbnailDescription">{this.props.description}</p>)}
      </div>
    </button>);
  }
}
class ProjectTile extends Component {
  render() {
    const active = this.props.active
      ? " active"
      : "";
    return (<div className={"thumbnailImage overlay" + active} style={this.props.style}/>);
  }
}

export default App;
