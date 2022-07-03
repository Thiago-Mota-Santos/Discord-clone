import styled from "styled-components";
import { Microphone, Headset, Gear } from "phosphor-react";

export const Container = styled.div`
  grid-area: UI;
  display:flex;
  align-items: center;
  padding: 10px;
  background: var(--tertiary);
  box-shadow: rgba(0.0.0.0.2) 0px 1px 0px 0px;

  > div{
    display:flex;
    flex-direction: column;
  }

  >div span{
    margin-left: 5px;
    color:var(--gray);
    font-size: 12px;
    cursor:pointer;
  }

  >div strong{
    margin-left: 5px;
    color:var(--white);
    font-size: 14px;
  }

`;

export const Content = styled.div`
   display: flex;
   flex-direction: row !important;
   align-items: center;
`;

export const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    background-color: var(--gray);
`;


export const Mic = styled(Microphone)`
    width: 24px;
    height: 24px;
    color:var(--symbol);
    margin-left: 45px;
    cursor: pointer;

    &:hover{
        color:var(--white);
    }
    

`;


export const  HeadSet = styled(Headset)`
   width: 24px;
   height: 24px;
   margin-left: 4px;
   color:var(--symbol);
   cursor: pointer;

   &:hover{
        color:var(--white);
    }
    
`;
export const  Config = styled(Gear)`
   width: 24px;
   height: 24px;
   margin-left: 4px;
   cursor: pointer;
   color:var(--symbol);

   &:hover{
        color:var(--white);
    }
    
`;