import { User } from "./types/User";

export const AppHelpers = {
  filterUsersByName: ({
    usersList,
    searchedName,
  }: {
    usersList: User[];
    searchedName?: string;
  }) =>
    searchedName && searchedName.length > 0
      ? usersList.filter(({ name }) =>
          name.toLowerCase().includes(searchedName.toLowerCase())
        )
      : usersList,
};
