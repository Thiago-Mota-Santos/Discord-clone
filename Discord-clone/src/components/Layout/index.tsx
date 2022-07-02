import React from "react";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChatName from "../ChatName";
import ChannelList from "../ChannelList";
import { Grid } from "./styles";
import UserInfo from "../UserInfo";

const layouy: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChatName />
      <ChannelList />
      <UserInfo />
    </Grid>
  );
};

export default layouy;
