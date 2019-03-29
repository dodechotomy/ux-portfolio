import React from 'react';
import {resize} from '../fixedAspectRatio'



export function VimeoEmbed(props) {
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
