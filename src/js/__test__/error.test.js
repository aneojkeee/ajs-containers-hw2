import errorList from "../errorList";
import ErrorRepository from "../errorRepository";

/* test('Получение описания ошибки по коду', () => {
const error1 = new ErrorRepository();
const received = error1.translate(101);
    const result = 'typing Error';
    expect(received).toBe(result);
});

test('Получение описания ошибки по коду', () => {
const error1 = new ErrorRepository(Object.entries(errorList));
const received = error1.translate(101);
    const result = 'typing Error';
    expect(received).toBe(result);
});
*/

test("Unknown error", () => {
  const error10 = new ErrorRepository();
  const received = error10.translate(100);
  const result = "Unknown error";
  expect(received).toBe(result);
});

test("unused expression", () => {
  const error2 = new ErrorRepository();
  error2.errors.set(105, "unused expression");
  const received = error2.translate(105);
  const result = "unused expression";
  expect(received).toBe(result);
});
