import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
  it("renders with default placeholder", () => {
    render(
      <SearchInput
        value=""
        onChange={jest.fn()}
        onKeyUp={jest.fn()}
      />
    );
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("calls onChange when text is entered", () => {
    const handleChange = jest.fn();
    render(
      <SearchInput
        value=""
        onChange={handleChange}
        onKeyUp={jest.fn()}
      />
    );

    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "React" } });

    expect(handleChange).toHaveBeenCalledWith("React");
  });

  it("calls onKeyUp when a key is released", () => {
    const handleKeyUp = jest.fn();
    render(
      <SearchInput
        value="React"
        onChange={jest.fn()}
        onKeyUp={handleKeyUp}
      />
    );

    const input = screen.getByPlaceholderText("Search");
    fireEvent.keyUp(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(handleKeyUp).toHaveBeenCalled();
  });

  it("renders with custom placeholder", () => {
    render(
      <SearchInput
        value=""
        onChange={jest.fn()}
        onKeyUp={jest.fn()}
        placeholder="Search videos"
      />
    );
    expect(screen.getByPlaceholderText("Search videos")).toBeInTheDocument();
  });
});
