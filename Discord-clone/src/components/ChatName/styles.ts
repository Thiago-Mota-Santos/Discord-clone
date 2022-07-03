import styled from 'styled-components';
import { Hash } from  'phosphor-react'

export const Container = styled.div`
   grid-area: CN;
   display:flex;
   align-items: center;
   background:var(--secondary);
   border-bottom: 1px solid var(--tertiary);
   padding: 0 17px;
   
`;

export const HashTag = styled(Hash)`
   width:20px;
   height:20px;
   color:var(--symbol);
`;

export const  Text = styled.h1`
  margin-left: 9px;
  font-weight: 500;
  font-size:16px;
  color:var(--white);
`;
export const  Separator = styled.div`
   height:24px;
   width: 1px;
   margin: 0 13px;
   background: var(--white);
   opacity: 0.2;
`
export const  Description = styled.span`
   color:var(--gray);
   font-size:15px;
   font-weight: bold;
   font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
