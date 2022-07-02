import React from "react";

import { Container, HashTag, InviteIcon, SettingIcon } from "./styles";

interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : " "}>
      <div>
        <HashTag />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
