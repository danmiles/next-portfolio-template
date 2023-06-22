import React from "react";
import Link from "next/link";

const ButtonLink = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='button-main'>{text}</button>
    </Link>
  );
};

export default ButtonLink;
