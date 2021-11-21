import { User } from "@src/types/User";
import React from "react";
import styled from "styled-components";

interface UsersListProps {
  usersList?: User[];
  isLoading: boolean;
}

export const UsersList: React.FC<UsersListProps> = ({
  usersList = [],
  isLoading,
}) => {
  const isUsersListEmpty = usersList.length === 0;

  return (
    <Wrapper>
      {!isLoading &&
        usersList.map(({ id, name, username }, index) => (
          <UserBlock key={id} data-testid="user-block">
            <Text>{`${index + 1}.`}</Text>
            <HighlightedText>{name}</HighlightedText>
            <Text>{`@${username}`}</Text>
          </UserBlock>
        ))}
      {isLoading && <p data-testid="users-list-loading">Loading...</p>}
      {isUsersListEmpty && !isLoading && (
        <p data-testid="users-list-empty">
          No users with that name have been found
        </p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 15px 0;
`;

const UserBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
`;

const HighlightedText = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding: 0 10px;
`;

const Text = styled.span`
  font-size: 12px;
  color: grey;
`;
