import { sum } from "../components/sum";
// TEST CASE 1

test("sum function should calculate the sum of two numbers", () => {
  // without any test case it'll always pass
  const result = sum(3, 4);

  //   Assertion
  expect(result).toBe(7);

  //   NOTE: without assertion, test case will always pass
});
