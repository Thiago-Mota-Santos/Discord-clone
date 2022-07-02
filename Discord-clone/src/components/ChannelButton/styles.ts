import styled from "styled-components";
import { Hash, UserPlus, Gear } from "phosphor-react";




export const Container = styled.div`
    display:Flex;
    align-items:center;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;
    transition: background-color 0.2s;


    >div {
        display: flex;
        align-items: center;
    }

    > div span{
        margin-left: 5px;
        color: var(--senary);
    }

    &:hover, &.active{
        background: var(--quinary);

        >div span{
            color: var(--white);
        }
    }
`;


export const HashTag = styled(Hash)`
    width: 20px;
    height: 20px;
    cursor: pointer;
    color:var(--symbol);
`;




export const  InviteIcon = styled(UserPlus)`
  width: 16px;
  height: 16px;
  color:var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover{
    color:var(--white);
  }
`;

export const SettingIcon = styled(Gear)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color:var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover{
    color:var(--white);
  }

`;