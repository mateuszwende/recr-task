import { App } from "./App";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { UsersApi } from "./api/Users";
import { AxiosResponse } from "axios";

describe("<App />", () => {
  test("should fetch users", async () => {
    jest.spyOn(UsersApi, "fetch").mockResolvedValue({
      data: [
        { id: 1, name: "user-1" },
        { id: 2, name: "user-2" },
      ],
    } as AxiosResponse);

    render(<App />);

    await waitFor(() => expect(UsersApi.fetch).toHaveBeenCalledTimes(1));
  });
});
