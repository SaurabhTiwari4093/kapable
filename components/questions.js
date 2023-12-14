import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function Questions(props) {
  const { ques,ans } = props;

  return (
    <AccordionItem className>
      <AccordionItemHeading>
        <AccordionItemButton style={{backgroundColor:"white"}}>{ques}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className="font-normal text-slate-600">
          {ans}
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
}

export default Questions;
