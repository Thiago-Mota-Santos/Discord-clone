import React from "react";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChatName from "../ChatName";
import ChannelList from "../ChannelList";
import { Grid } from "./styles";
import UserInfo from "../UserInfo";
import ChannelInfo from "../ChannelInfo";
import UserList from "../UserList";

const layouy: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChatName />
      <ChannelList />
      <UserInfo />
      <ChannelInfo />
      <UserList />
    </Grid>
  );
};

export default layouy;
