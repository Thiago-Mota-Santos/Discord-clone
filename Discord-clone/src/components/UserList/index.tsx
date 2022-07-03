import React from "react";

import { Container, Title, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
}

interface TitleProps {
  title: string;
}

const Role: React.FC<TitleProps> = ({ title }) => {
  return (
    <Title>
      <span>{title}</span>
    </Title>
  );
};

const UserRow: React.FC<UserProps> = ({ nickname }) => {
  return (
    <User>
      <Avatar />
      <strong>{nickname}</strong>
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role title="Ultra romântico fofo - 9" />
      <UserRow nickname="Emersu" />
      <UserRow nickname="Kaneko" />
      <UserRow nickname="Vitinho" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
      <UserRow nickname="User" />
    </Container>
  );
};

export default UserList;
