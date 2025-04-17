import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Button from "../Button";


test("renders button and handles click", async () => {

    const handleClick = jest.fn();
    render(<Button name="Static" onClick={handleClick} />);

    const btn = screen.getByRole("button", { name: 'Static' });

    await act(async () => {
        fireEvent.click(btn);
    })

    expect(handleClick).toHaveBeenCalledTimes(1);
})