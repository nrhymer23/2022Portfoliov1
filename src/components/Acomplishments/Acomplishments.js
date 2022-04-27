import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CarouselButtonDot } from '../TimeLine/TimeLineStyles';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Open Source Projects'},
  { number: 100, text: 'Happy Clients', }
  // if any are added need to find a way to activate Carousel on accomplishemnts 

  
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>Personal Accomplishments</SectionTitle>
   <Boxes>
     {data.map((card,index) => (
       <Box key={index}>
         <BoxNum>{card.number}+</BoxNum>
         <BoxText>{card.text}</BoxText>
       </Box>
     ))}
   </Boxes>
 </Section>
);

export default Acomplishments;
