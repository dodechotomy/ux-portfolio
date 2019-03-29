import React from 'react';


export function Image(props) {
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
        <img src={defaultSrc} style={style} width={width} height={height} alt={alt || ""}/>
      </picture>
      {figcaption}
    </figure>)
  } else {
    return (<img {...props}/>);
  }
}
