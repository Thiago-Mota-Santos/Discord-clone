import React from "react";

import { Container, Content, Circle, Mic, HeadSet, Config } from "./styles";

const UserInfo: React.FC = () => {
  return (
    <>
      <Container>
        <Circle />
        <div>
          <strong>Thzinh</strong>
          <span>#4128</span>
        </div>
        <Content>
          <Mic />
          <HeadSet />
          <Config />
        </Content>
      </Container>
    </>
  );
};

export default UserInfo;
