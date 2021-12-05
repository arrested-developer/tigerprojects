import { render } from "@testing-library/react";
import Home from "./home";

describe("home page", () => {
  describe("smoke test", () => {
    it("renders without error", () => {
      render(<Home />);
    });
  });
});
