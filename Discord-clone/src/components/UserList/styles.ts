import styled from "styled-components";

export const Container = styled.div`
  grid-area: UL;
  background:var(--secondary);

  display:flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;

  max-width: calc(100vh - 46px);
`;


export const Title = styled.div`
    display:flex;

    >span{
     color:var(--gray);
    }



`;
 export const  User = styled.div`
   margin-top: 5px;
   padding: 5px;

   display:flex;
   align-items: center;
   cursor: pointer;

   border-radius :4px;
   background: transparent;
   transition: background 0.2s;

   &:hover{
    background:rgba(255,255,255,0.1);
   }

   > strong{
    margin-left: 13px;
    font-weight: 500;
    color:red;
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow:hidden;
   }
 `;
 export const  Avatar = styled.div`
    flex-shrink: 0;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background: var(--primary);

 `;
 export const  Role = styled.div`
    margin-top: 20px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 12px;
    color:var(--gray);
 `;


