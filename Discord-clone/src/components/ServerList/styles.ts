import styled from 'styled-components';

export const Container = styled.div`
   grid-area: SL;
   display:flex;
   flex-direction: column;
   align-items: center;
   height:100%;
   background:var(--tertiary);
   padding:11px; 
   flex-shrink: 0;
   overflow: hidden;

   --webkit-scrolbar{
      display:none;
   }
   
`;

export const Icon = styled.div`
   display:flex;
   margin-top: 5px;
   flex-direction: column;
   height:53px;
   width:53px;
   border-radius: 50%;
   background:var(--primary);

   transition: border-radius .2s, background .2s;
  
  &:hover{
    background:var(--discord);
    cursor:pointer;
    border-radius: 16px;
  }
`;

export const Space = styled.div`
   display:flex;
   margin-bottom: 10px;
   margin-top: 10px;
   border: 2px solid var(--quartenary); 
   height: 2px;
   width:30px;
   background:var(--senary);
   flex-direction: column;
`;

