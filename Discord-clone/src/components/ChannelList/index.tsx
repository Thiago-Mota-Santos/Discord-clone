import React from "react";
import ChannelButton from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>canais de texto </span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="regra" />
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="animes-mangás-etc" />
      <ChannelButton channelName="panela" />
    </Container>
  );
};

export default ChannelList;
