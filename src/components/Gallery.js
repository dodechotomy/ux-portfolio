import React from 'react';

export function Gallery(props) {
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
