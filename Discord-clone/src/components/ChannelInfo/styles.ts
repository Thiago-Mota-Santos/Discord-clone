import styled from "styled-components";
import { PlusCircle } from "phosphor-react"

export const Container = styled.div`
    grid-area: CI;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:var(--primary);
    overflow-y: hidden;

  
`;


export const Messages = styled.div`
 padding: 20px 0;
 display:flex;
 flex-direction: column;

 max-height: calc(100vh - 46px - 68px);

 overflow-y: scroll;

 ::-webkit-scrollbar {
    width: 4px;
}


::-webkit-scrollbar-track {
  background: var(--tertiary); 
}
 

::-webkit-scrollbar-thumb {
  background: var(--gray); 
}




`
export const  InputWrapper = styled.div`
 width: 100%;
 padding: 0 16px;

`
export const  Input = styled.input`
 width: 100%;
 height: 44px;
 padding: 0 10px 0 57px;
 border-radius: 7px;

 color: var(--white);
 background: var(--chat-input);
 position: relative;

 &::placeholder{
    color:var(--gray);
 }

 ~ svg{
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
 }
`
export const  InputIcon = styled(PlusCircle)`
    width: 24px;
    height: 24px;
    color:var(--gray);


`;