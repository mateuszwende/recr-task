import { Search } from "./Search";
import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";

const setup = () => {
  const onValueChange = jest.fn();
  const utils = render(
    <Search name="test-search" onValueChange={onValueChange} />
  );
  const input = utils.getByTestId("test-search") as HTMLInputElement;

  return {
    onValueChange,
    input,
    ...utils,
  };
};

describe("<Search />", () => {
  test("should allow letters to be inputted", () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: "test-text" } });

    expect(input.value).toBe("test-text");
  });

  test("should call onValueChange function after letters are inputted", async () => {
    const { input, onValueChange } = setup();

    fireEvent.change(input, { target: { value: "test-text" } });

    await waitFor(() => expect(onValueChange).toHaveBeenCalledTimes(1));
  });

  test("should call onValueChange function with inputted value as an argument", async () => {
    const { input, onValueChange } = setup();

    fireEvent.change(input, { target: { value: "test-text" } });

    await waitFor(() =>
      expect(onValueChange).toHaveBeenCalledWith("test-text")
    );
  });
});
