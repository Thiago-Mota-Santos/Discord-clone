import styled from "styled-components";
import { Plus } from 'phosphor-react'


export const Container = styled.div`
  grid-area: CL;
  display: flex;
  background:var(--secondary);
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
  
`;


export const Category = styled.div`
   display:flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 6px;

   >span{
    text-transform: uppercase;
    color:var(--gray);
    font-size: 12px;
    font-weight: 500;
   }
   
`;

export const AddCategoryIcon = styled(Plus)`
   width: 21px;
   height: 21px;
   cursor: pointer;
   color: var(--symbol);
`;