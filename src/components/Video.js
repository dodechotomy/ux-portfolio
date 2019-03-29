import React from 'react';
import {resize} from '../fixedAspectRatio'



export function Video(props) {
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
