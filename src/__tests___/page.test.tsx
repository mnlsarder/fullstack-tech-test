import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Home Page", () => {
  it("should render heading", async () => {
    render(<Page />);
    expect(screen.getByRole("heading")).toBeDefined();
  });
});
