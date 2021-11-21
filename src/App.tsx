import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { UsersApi } from "./api/Users";
import { AppHelpers } from "./App.helpers";
import { Search } from "./components/Search/Search";
import { UsersList } from "./components/UsersList/UsersList";
import { User } from "./types/User";

export const App = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [filteredUsersList, setFilteredUsersList] = useState<User[]>([]);
  const [searchedUserName, setSearchedUserName] = useState<
    string | undefined
  >();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await UsersApi.fetch();
        setIsLoading(false);

        setUsersList(response.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsersList(
      AppHelpers.filterUsersByName({
        usersList,
        searchedName: searchedUserName,
      })
    );
  }, [usersList, searchedUserName]);

  return (
    <Wrapper>
      <div>
        <p>Users list</p>
        <Search
          name="users-list-search"
          onValueChange={setSearchedUserName}
          placeholder="Search by user name..."
        />
        <UsersList usersList={filteredUsersList} isLoading={isLoading} />
        {error && (
          <p>Sorry, unexpected error occured. Please try again in a moment.</p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
