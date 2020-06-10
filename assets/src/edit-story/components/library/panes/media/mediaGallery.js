import React, {useState, useCallback, memo} from "react";
import { render } from "react-dom";
import styled from 'styled-components';
import MediaElement from './mediaElement';
import Gallery from "react-photo-gallery";

const Placeholder = styled.div`
        background-color: red;
        width: ${({photo}) => photo.width}px;
        height: ${({photo}) => photo.height}px;
        margin: 2px;
      `;

function MediaGallery({
  resources,
  onInsert
}) {
  if (!resources || !resources.length) return;

  const photos = resources.map((resource) => {
    return {
      'src': resource.src,
      'width': resource.width,
      'height': resource.height,
    };
  });

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => {
      // return <Placeholder key={index} photo={photo}/>
      return <MediaElement
          resource={resources[index]}
          width={photo.width}
          height={photo.height}
          margin={4}
          key={index}
          onInsert={onInsert}
        />
    }, [resources]);

  return <Gallery margin={4} targetRowHeight={110} direction={"row"} photos={photos} renderImage={imageRenderer} />;
}

export default memo(MediaGallery);
