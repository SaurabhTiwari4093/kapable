import React from "react";
import Image from 'next/image';

function WhyCard(props) {
  const { icon, text } = props;
  return (
    <div className="bg-[#227AEB] px-4 py-5 rounded-lg w-full h-full flex items-center text-white font-medium text-base">
      <div className="mr-2 flex items-center"><Image src={icon} alt="" height={25} width={25}/></div>
    <div>{text}</div>
</div>
  );
}

export default WhyCard;
