import { AppHelpers } from "./App.helpers";
import { User } from "./types/User";

describe("App helpers", () => {
  describe("filterUserByName", () => {
    test("should filter users list by provided name", () => {
      const filteredUsersList = AppHelpers.filterUsersByName({
        usersList: [
          { id: 1, name: "user-1", username: "username-1" },
          { id: 2, name: "user-2", username: "username-2" },
        ] as User[],
        searchedName: "user-1",
      });

      expect(filteredUsersList).toStrictEqual([
        { id: 1, name: "user-1", username: "username-1" },
      ]);
    });

    test("should return whole users list, if name is not provided", () => {
      const filteredUsersList = AppHelpers.filterUsersByName({
        usersList: [
          { id: 1, name: "user-1", username: "username-1" },
          { id: 2, name: "user-2", username: "username-2" },
        ] as User[],
      });

      expect(filteredUsersList).toStrictEqual([
        { id: 1, name: "user-1", username: "username-1" },
        { id: 2, name: "user-2", username: "username-2" },
      ]);
    });
  });
});
