import React from "react";
import Image from 'next/image';
import Tick from '../public/assets/tick.svg';

function BonusCard(props) {
  const { text ,borderRadie} = props;
  return (
  <div className="bg-[#37B57E] p-4 md:p-5 rounded-lg w-full h-full flex items-center text-white" style={{borderRadius:borderRadie}}>
      <div className="mr-2 items-center hidden md:flex"><Image src={Tick} alt="" height={25} width={25}/></div>
      <div className={"text-base"}>{text}</div>
  </div>
  );
}

export default BonusCard;
