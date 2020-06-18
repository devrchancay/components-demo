import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Tag } from "../index";

test("Renders", async () => {
  const { getByRole } = render(<Tag label="John" />);
  expect(getByRole("tag")).toHaveTextContent("John");
});
