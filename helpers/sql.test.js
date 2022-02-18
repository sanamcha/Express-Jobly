// added here/// 

const { sqlForPartialUpdate } = require("./sql");


describe("sqlForPartialUpdate", function () {
  test("works for 1 item", function () {
    const result = sqlForPartialUpdate(
        { a1: "b1" },
        { a1: "a1", aA2: "a2" });
    expect(result).toEqual({
      setCols: "\"a1\"=$1",
      values: ["b1"],
    });
  });

  test("works for 2 items", function () {
    const result = sqlForPartialUpdate(
        { a1: "b1", jsA2: "b2" },
        { jsA2: "a2" });
    expect(result).toEqual({
      setCols: "\"a1\"=$1, \"a2\"=$2",
      values: ["b1", "b2"],
    });
  });
});