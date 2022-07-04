import React from "react";

import { Container, HashTag, Text, Separator, Description } from "./styles";

const ChatName: React.FC = () => {
  return (
    <Container>
      <HashTag />
      <Text>panela</Text>
      <Separator />
      <Description>Onde tudo de ruim se reune</Description>
    </Container>
  );
};

export default ChatName;
