import React, {Component} from 'react';
import $ from 'jquery'
import {projects, navTags} from "./portfolio-content";
// import "node_modules/include-media-export/dist/include-media-1.0.2.min.js"
// import "include-media-export"
// import im from "../node_modules/include-media-export/include-media.js"
import "./App.scss";
import "./themes.scss";
import {resize, resizeAll} from './fixedAspectRatio.js'
const ReactMarkdown = require('react-markdown')

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
        <p className="subtitle">Hire me!</p>
        <ThemeButtons disabled={overlayIsActive} changeTheme={this.changeTheme} dark={this.state.dark} toggleDarkMode={this.toggleDarkMode}/>
      </header>
      <FilteredTileList disabled={overlayIsActive} items={projects} tags={navTags} hash={this.state.hash}/>

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
        }
      } else if (oldHash) {
        const focusElement = document.getElementById("tile-" + oldHash);
        if (focusElement) {
          focusElement.focus();
        }
      }
    }
  }
  componentDidMount() {
    this.handleHashChange();
    setInterval(() => resizeAll(), 1000);
  }
}

class ThemeButtons extends Component {
  render() {
    return (<div className="themeButtons">
      <button onClick={this.props.changeTheme}>mix it up</button>
      <button aria-pressed={this.props.dark} className={"toggleButton vertical " + (
          this.props.dark
          ? "selected"
          : "")} onClick={this.props.toggleDarkMode}>
        dark mode
      </button>
    </div>);
  }
}

class FilteredTileList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateHash = this.updateHash.bind(this);
  }
  updateHash(newHash) {
    window.location.hash = newHash;
  };
  render() {
    let activeItems = this.props.items;
    let inactiveItems = [];
    if (this.state.activeFilters.length > 0) {
      const sharesTag = item => item.tags.some(tag => this.state.activeFilters.includes(tag));
      activeItems = this.props.items.filter(sharesTag);
      inactiveItems = this.props.items.filter(item => !sharesTag(item));
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

    return (<section disabled={this.props.disabled}>
      <FilterSelect disabled={this.props.disabled} value={this.state.activeFilters} onClick={this.handleChange} tags={this.props.tags}/>
      <ul className="tileList" aria-label="Projects list">
        {
          allItems.map((item, index) => {
            const inactive = inactiveItems.includes(item);
            return (<ProjectTile updateHash={this.updateHash} disabled={this.props.disabled} className={inactive
                ? "inactive"
                : ""} key={item.name} id={index} {...item}/>);
          })
        }
      </ul>
      {emptyListMessage}
      <div className="projectOverlays">
        {
          allItems.map((item, index) => {
            return (<ProjectOverlay key={item.name} id={index} active={item.hash === this.props.hash} {...item}/>);
          })
        }
      </div>
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
    return (<div aria-label="Filter by Tags" className="filterButtons">
      {this.props.tags.map(tag => this.renderFilterButton(tag))}
    </div>);
  }
  renderFilterButton(currentTag) {
    let selected = this.props.value.includes(currentTag);
    return (<button aria-pressed={selected} disabled={this.props.disabled} key={currentTag} {...tabIndex(this.props.disabled)} value={currentTag} onClick={this.props.onClick} name="filter" title={(
        selected
        ? "hide "
        : "show ") + currentTag + " projects"} className={"toggleButton horizontal " + (
        selected
        ? "selected"
        : "")}>
      {currentTag}
    </button>);
  }
}
function ProjectTile(props) {
  const className = "tile thumbnailImage " + props.className + (
    props.activeOverlay
    ? " active"
    : "");
  const tileTitle = "tile-title-" + props.hash;
  const style = {
    ...props.style,
    backgroundImage: "url(" + props.thumbnail.src + ")"
  };
  return (<a href={"#" + props.hash} id={"tile-" + props.hash} style={style} aria-labelledby={tileTitle} className={className} {...tabIndex(props.disabled)} disabled={props.disabled}>

    <div className="backgroundColor">
      <h3 id={tileTitle}>{props.name}</h3>
      <TagList tags={props.tags}/> {props.description && (<p className="thumbnailDescription">{props.description}</p>)}
    </div>
  </a>);

}
// class ProjectThumbnail extends Component {
//   render() {
//      const imageSrc = "http://dev.scott-wilson.ca/img/thumb/" + ;
//     return (<Image {...this.props.thumbnail} src={imageSrc} width={320} height={320} className={this.props.className + " thumbnailImage"}/>);
//   }
// }
function tabIndex(disabled) {
  return {
    tabIndex: disabled
      ? "-1"
      : "0"
  };
}
class ProjectOverlay extends Component {
  render() {
    const closeOverlay = () => {
      window.location.hash = "";
    };
    const classNames = "overlay " + (
      this.props.active
      ? " active"
      : "");
    const disabled = !this.props.active;
    const headingID = "heading-" + this.props.hash;
    return (<section aria-labelledby={headingID} className={classNames}>
      <div role="button" aria-label="Close" className="closeOverlay" onClick={closeOverlay}>
        <button role="presentation" disabled={disabled} {...tabIndex(disabled)}>╳</button>
      </div>
      <ProjectPage headingID={headingID} disabled={disabled} {...this.props}/>
    </section>);
  }
}
function ProjectPage(props) {

  const content = [];
  if (props.content) {
    props.content.forEach(block => {
      content.push(<ContentBlock key={block.heading} {...block}></ContentBlock>)
    });
  }
  return (<article id={props.hash} {...tabIndex(props.disabled)} disabled={props.disabled} className="backgroundColor projectPage">
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
function ContentBlock(props) {
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
function VisualBlock({
  type,
  ...props
}) {
  switch (type) {
    case "image":
      return <Image {...props}/>
    case "video":
      return <Video {...props}/>
    case "vimeo":
      return <VimeoEmbed {...props}/>
    case "gallery":
      return <Gallery {...props}/>
    default:
      return null;
  }
}

function Image(props) {
  if (Array.isArray(props.sources)) {
    const {
      sources,
      width,
      height,
      alt,
      caption,
      defaultSrc,
      className,
      style,
      ...restProps
    } = props;
    const figcaption = caption
      ? <figcaption>{caption}</figcaption>
      : null;
    return (<figure {...restProps} className={(className || "") + " image"}>
      <picture >
        {sources.map(s => (<source media={s.media} key={s.src} srcSet={s.src} type={s.type}/>))}
        <img src={defaultSrc} style={style} width={width} height={height} alt={alt}/>
      </picture>
      {figcaption}
    </figure>)
  } else {
    return (<img {...props}/>);
  }
}

function Gallery({
  sources,
  caption,
  root,
  style,
  className,
  ...props
}) {
  //TODO: Add a lightbox feature
  const figcaption = caption
    ? <figcaption>{caption}</figcaption>
    : null;
  return (<figure {...props} className={(className || "") + " gallery"}>
    <div className="gallery-grid">
      {sources.map(s => (<img key={s.src} style={style} src={root + s.src} alt={s.alt}/>))}
    </div>
    {figcaption}
  </figure>)
}
function Video({
  sources,
  caption,
  width,
  fallBack,
  className,
  height,
  ...props
}) {
  const blurBackground = (
    fallBack
    ? "blurBackground"
    : "");
  const fallBackImage = fallBack
    ? {
      backgroundImage: "url(" + fallBack + ")"
    }
    : null;
  const aspectRatio = height / width;
  const fixedAspectChild = React.createRef();
  const figcaption = caption
    ? <figcaption>{caption}</figcaption>
    : null;
  setTimeout(() => {
    resize(fixedAspectChild.current)
  }, 500);
  return (<figure className={(className || "") + " video"} {...props}>
    <div className={blurBackground + " center"} style={fallBackImage} role="presentation">
      <video ref={fixedAspectChild} controls="controls" data-preferredwidth={width} data-preferredheight={height} data-aspectratio={aspectRatio}>
        {
          Array.isArray(sources)
            ? sources.map(s => (<source key={s.src} src={s.src} type={s.type}/>))
            : (<source src={sources.src} type={sources.type}/>)
        }
        Your browser does not support the video tag.
      </video>
    </div>
    {figcaption}
  </figure>);
}
function VimeoEmbed({
  src,
  title,
  width,
  height,
  caption,
  fallBack,
  className,
  ...props
}) {
  const fixedAspectChild = React.createRef();
  setTimeout(() => {
    resize(fixedAspectChild.current)
  }, 500);
  const blurBackground = (
    fallBack
    ? " blurBackground"
    : "");
  const fallBackImage = fallBack
    ? {
      backgroundImage: "url(" + fallBack + ")"
    }
    : null;
  const figcaption = caption
    ? <figcaption>{caption}</figcaption>
    : null;
  const aspectRatio = height / width;
  const iframeProps = {
    ref: fixedAspectChild,
    'data-preferredwidth': width,
    'data-preferredheight': height,
    'data-aspectratio': aspectRatio,
    src: src,
    title: title,
    frameBorder: "0",
    webkitallowfullscreen: "webkitallowfullscreen",
    mozallowfullscreen: "mozallowfullscreen",
    allowFullScreen: "allowFullScreen"
  }
  return (<figure {...props} className={(className || "") + " video"} role="presentation">
    <div className={blurBackground + " center"} style={fallBackImage} role="presentation">
      <iframe {...iframeProps}/>
    </div>
    {figcaption}

  </figure>);
}
function TagList(props) {
  return (<ul className="tagList">{props.tags.map(tag => <li key={tag}>{tag + " "}</li>)}</ul>);
}

export default App;
