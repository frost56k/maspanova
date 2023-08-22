import dynamic from 'next/dynamic';
const ImageModal = dynamic(() => import('./ImageModal'));

import React from 'react';
import ReactMarkdown from 'react-markdown';



const components = {
  img: ({node, ...props}) => {
    return (
      <ImageModal client src={props.src} alt={props.alt} />
    );
  },
}

const GalleryBody = ({ content }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs lg:text-sm">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </>
  )
}

export default GalleryBody;
