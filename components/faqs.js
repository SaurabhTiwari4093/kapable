import React from 'react';
import Questions from './questions';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function Faqs() {
  return (
    <div className='my-6 md:my-16'>
        <div className='text-center mb-20 text-2xl md:text-4xl font-bold'>Frequently asked <span className='text-[#227AEB]'>questions</span></div>
        <div className='my-4 shadow-lg p-6 md:p-16 rounded-tl-[60px] rounded-br-[60px] font-semibold flex flex-col gap-4 border bg-white'>
            <Accordion allowZeroExpanded style={{border:"none"}}>
              <Questions ques={"What is Kapable?"} ans={"We are an after-school skill development program that focuses on children's holistic development by empowering them with 21st Century skills. We want all children to become independent thinkers, innovators, confident communicators, and leaders."}/>
              <Questions ques={"Are these sessions online?"} ans={"Yes, this is an online program."}/>
              <Questions ques={"What are the class timings?"} ans={"We take sessions for students from 11 AM to 8 PM. The timings for each child are fixed based on the child's age and availability."}/>
              <Questions ques={"Will there be any assignments given for practice at home?"} ans={"Yes, all students will be provided with worksheets, games, challenges, flashcards, and much more to keep learning at home."}/>
              <Questions ques={"Do we need a laptop/tablet/phone?"} ans={"Yes, this course is completely online. All students need to have a gadget and high-speed internet in order to take these sessions."}/>
              <Questions ques={"Are these group classes?"} ans={"Yes, these classes are done in small groups, with a maximum of 4 students in 1 classroom"}/>
              <Questions ques={"What is the duration of each class? "} ans={"Each session is for 60 minutes."}/>
            </Accordion>
        </div>
    </div>
  )
}

export default Faqs
