import "regenerator-runtime/runtime";
import {postLoan, getLoan} from "../api/loan-service/loan";

test("API unit test", async () => {
  const resPostLoan = await postLoan({
    amount: 100,
    date: new Date(),
    name: "Quan"
  });
  expect(!!resPostLoan.data).not.toBe(false);
});

test("API unit test", async () => {
  const resPostLoan = await getLoan();
  expect(resPostLoan.data.length).toBeGreaterThan(0);
});
