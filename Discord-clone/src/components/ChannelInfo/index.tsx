import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelInfo: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messageRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);
  return (
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Thzinh"
          date="03/07/2022"
          content="A Bramajala é o caminho"
        />
        <ChannelMessage
          author="GustavoDS"
          date="03/07/2022"
          content="BA BA BA BA BA BA BA BA BA BA BA BA BA"
        />
        <ChannelMessage
          author="Anhadon"
          date="03/07/2022"
          content="Kiki do you love me????????"
        />
        <ChannelMessage
          author="Gratos"
          date="03/07/2022"
          content="Você tem que entender que Ergo Proxy não é soninho, eu vi num dia só"
        />
        <ChannelMessage
          author="Kaneko"
          date="03/07/2022"
          content={
            <>
              <Mention>@Thzinh</Mention> Vamos ver coelinha juntinhos
              :sadmamacor:
            </>
          }
        />
        <ChannelMessage
          author="Kaneko"
          date="04/07/2022"
          content="Se amor fosse preto e carinho fosse branco oq eu sinto por você seria xadrezinho"
        />
        <ChannelMessage
          author="Vitinho"
          date="04/07/2022"
          content={
            <>
              <Mention>@Thzinh</Mention> TATTAD TATTAD TATTAD TATTAD TATTAD
            </>
          }
        />
        <ChannelMessage
          author="Kaneko"
          date="04/07/2022"
          content="Se amor fosse preto e carinho fosse branco oq eu sinto por você seria xadrezinho"
        />
        <ChannelMessage
          author="Kaneko"
          date="04/07/2022"
          content="Se amor fosse preto e carinho fosse branco oq eu sinto por você seria xadrezinho"
        />
        <ChannelMessage
          author="Kaneko"
          date="04/07/2022"
          content="Se amor fosse preto e carinho fosse branco oq eu sinto por você seria xadrezinho"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #panela" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelInfo;
