import React from 'react';
import {Image} from "../Image"
import {Video} from "../Video"
import {VimeoEmbed} from "../VimeoEmbed"
import {Gallery} from "../Gallery"


export function VisualBlock(props) {
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
