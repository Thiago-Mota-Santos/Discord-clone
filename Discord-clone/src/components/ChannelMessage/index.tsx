import React from "react";

import { Container, Message, Avatar, Header, Content } from "./styles";
export { Mention } from "./styles";

export interface Props {
  author: string;
  date: string;
  hasMention?: boolean;
  content: string | React.ReactElement | React.ReactNode;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  hasMention,
  content,
}) => {
  return (
    <Container className={hasMention ? "mention" : " "}>
      <Avatar />

      <Message>
        <Header>
          <strong>{author}</strong>
          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
