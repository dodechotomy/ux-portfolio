import React, {useState} from 'react';
import {tabIndex} from "../../util.js"
import {TagList} from "../TagList.js"
import {resize, resizeAll} from '../../fixedAspectRatio.js'
const ReactMarkdown = require('react-markdown');

export function ProjectOverlay(props) {
  const closeOverlay = () => {
    window.location.hash = "";
  };
  const classNames = "overlay " + (
    props.active
    ? " active"
    : "");
  const disabled = !props.active;
  const headingID = "heading-" + props.hash;
  return (<section aria-labelledby={headingID} className={classNames}>
    <div role="button" aria-label="Close" className="closeOverlay" onClick={closeOverlay}>
      <button role="presentation" disabled={disabled} {...tabIndex(disabled)}>╳</button>
    </div>
    <ProjectPage headingID={headingID} disabled={disabled} {...props}/>
  </section>);
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
function VisualBlock(props) {
  const {
    type,
    ...rest
  } = props;
  switch (type) {
    case "image":
      return <Image {...rest}/>
    case "video":
      return <Video {...rest}/>
    case "vimeo":
      return <VimeoEmbed {...rest}/>
    case "gallery":
      return <Gallery {...rest}/>
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
      ...rest
    } = props;
    const figcaption = caption
      ? <figcaption>{caption}</figcaption>
      : null;
    return (<figure {...rest} className={(className || "") + " image"}>
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

function Gallery(props) {
  const {
    sources,
    caption,
    root,
    style,
    className,
    ...rest
  } = props;
  //TODO: Add a lightbox feature
  const figcaption = caption
    ? <figcaption>{caption}</figcaption>
    : null;
  return (<figure {...rest} className={(className || "") + " gallery"}>
    <div className="gallery-grid">
      {sources.map(s => (<img key={s.src} style={style} src={root + s.src} alt={s.alt}/>))}
    </div>
    {figcaption}
  </figure>)
}
function Video(props) {
  const {
    sources,
    caption,
    width,
    fallBack,
    className,
    height,
    ...rest
  } = props;
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
  return (<figure className={(className || "") + " video"} {...rest}>
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

function VimeoEmbed(props) {
  const {
    src,
    title,
    width,
    height,
    caption,
    fallBack,
    className,
    ...rest
  } = props;
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
  return (<figure {...rest} className={(className || "") + " video"} role="presentation">
    <div className={blurBackground + " center"} style={fallBackImage} role="presentation">
      <iframe {...iframeProps}/>
    </div>
    {figcaption}

  </figure>);
}
