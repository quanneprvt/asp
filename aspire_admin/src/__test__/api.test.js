import "regenerator-runtime/runtime";
import {postLoan, getLoan, updateLoan, getFeatureLoan} from "../api/loan-service/loan";

test("API unit test", async () => {
  const resPostLoan = await postLoan({
    amount: 100,
    date: new Date(),
    name: "Quan"
  });
  expect(!!resPostLoan.data).not.toBe(false);
});

test("API unit test", async () => {
  const resPostLoan = await postLoan({
    amount: 50,
    date: new Date(),
    name: "Quan"
  });
  expect(!!resPostLoan.data).not.toBe(false);
});

test("API unit test", async () => {
  const resPostLoan = await postLoan({
    amount: 50,
    date: new Date(),
    name: "Quan4342343"
  });
  expect(!!resPostLoan.data).not.toBe(false);
});

test("API unit test", async () => {
  const resPostLoan = await postLoan({
    amount: 0,
    date: new Date(),
    name: "Quanw4143423423"
  });
  expect(!!resPostLoan.data).not.toBe(false);
});

test("API unit test", async () => {
  const resPostLoan = await getLoan();
  expect(resPostLoan.data.length).toBeGreaterThan(0);
});

test("API unit test", async () => {
  const resPostLoan = await updateLoan({
    id: 1,
    status: "approved"
  });
  expect(!!resPostLoan.data).not.toBe(false);
});

test("API unit test", async () => {
  const resPostLoan = await getFeatureLoan();
  expect(!!resPostLoan.data).not.toBe(false);
});
