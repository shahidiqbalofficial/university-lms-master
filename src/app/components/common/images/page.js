import React from "react";
import Image from "next/image";

const Images = (props) => {
  return (
    <Image
      src={`/${props.src}`}
      alt={props.alt}
      loading="lazy"
      width={props.width}
      height={props.height}
      quality={80}
      style={props.style}
    />
  );
};

export default Images;
