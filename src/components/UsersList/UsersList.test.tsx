import { UsersList } from "./UsersList";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { User } from "@src/types/User";

describe("<UsersList />", () => {
  test("should render list of users", async () => {
    const UsersListComponent = render(
      <UsersList
        usersList={
          [
            { id: 1, name: "user-1", username: "username-1" },
            { id: 2, name: "user-2", username: "username-2" },
          ] as User[]
        }
        isLoading={false}
      />
    );

    const usersBlocks = await UsersListComponent.findAllByTestId("user-block");

    await waitFor(() => expect(usersBlocks.length === 2).toBeTruthy());
  });

  test("should display loading information, if the `isLoading` flag is truthy", async () => {
    const UsersListComponent = render(
      <UsersList usersList={[] as User[]} isLoading={true} />
    );

    const LoadingInformation = await UsersListComponent.findAllByTestId(
      "users-list-loading"
    );

    await waitFor(() => expect(LoadingInformation).toBeTruthy());
  });

  test("should render information about empty users list", async () => {
    const UsersListComponent = render(
      <UsersList usersList={[] as User[]} isLoading={false} />
    );

    const EmptyListInformation = await UsersListComponent.findAllByTestId(
      "users-list-empty"
    );

    await waitFor(() => expect(EmptyListInformation).toBeTruthy());
  });
});
