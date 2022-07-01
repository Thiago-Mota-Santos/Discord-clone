import React from "react";

import { Container, HashTag, Text, Separator, Description } from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTag />
      <Text>casa-dos-degenerados</Text>
      <Separator />
      <Description>Animes, mangas e futilidades</Description>
    </Container>
  );
};

export default ChannelInfo;
