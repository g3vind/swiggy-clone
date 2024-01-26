import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

// test case to check if the footer page is loaded into dom or not
test("Checking if the footer page loads or not", () => {
  // 1. render the component onto the "jsdom"
  render(<Footer />);

  const heading = screen.getByRole("heading");

  //   assertion to find whether heading is inside the document or not
  expect(heading).toBeInTheDocument();
});
