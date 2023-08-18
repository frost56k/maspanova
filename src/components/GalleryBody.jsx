import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from "next/image";

const components = {
  a: ({node, ...props}) => {
    return (
      <a href={props.href} rel="noopener noreferrer" target="_blank">
        {props.children}
      </a>
    )
  },
  img: ({node, ...props}) => {
    return (
      <Image
        src={props.src}
        alt={props.alt}
        width={400}
        height={300}
        quality={50}
        sizes="(max-width: 600px) 150px, (min-width: 601px) and (max-width: 1200px) 300px, (min-width: 1201px) 400px"
        style={{
          width: "400",
          height: "300",
          objectFit: "cover",
          objectPosition: "center"
        }} />
    );
  },
}

const GalleryBody = ({ content }) => {
  return (
    <>
      <div className="grid rounded-4 grid-cols-3 gap-2 lg:grid-cols-3 lg:gap-4 text-xs lg:text-sm">
        <ReactMarkdown components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </>
  )
}

export default GalleryBody;
