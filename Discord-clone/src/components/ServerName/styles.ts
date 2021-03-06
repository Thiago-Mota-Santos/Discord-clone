import styled from 'styled-components';
import { CaretDown } from "phosphor-react";

export const Container = styled.div`
  grid-area: SN;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background:var(--secondary);
  padding: 0 11px 0 16px;
  border-bottom: 1px solid var(--tertiary);
  
`;
export const Text = styled.h1`
   font-weight:bold;
   font-size:15px;
   color:var(--white);
`;


export const DownIcon = styled(CaretDown)`
    width: 22px;
    height: 22px;
    color: var(--white);
    cursor:pointer;
 `