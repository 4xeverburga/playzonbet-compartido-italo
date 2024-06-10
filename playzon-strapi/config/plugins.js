"use strict";

module.exports = {
  "do-not-delete": {
    config: {
      contentTypes: {
        "api::page.page": [
          // Equality.
          ["name", "is", "test"],
          // ["slug", "isNot", "test"],
          //
          // // Contains.
          // ["slug", "in", ["home", "blog", "404"]],
          // ["slug", "notIn", ["test", "temp"]],
          // ["slug", "has", "admin"],
          // ["slug", "hasNot", "-test"],
          //
          // // Regular expression.
          // ["slug", "matches", "^foobar"], // same as "starts with"
          // ["slug", "matches", "foobar$"], // same as "ends with"
          //
          // // Greater than or equal to.
          // ["rating", "lt", 10],
          // ["rating", "lte", 9],
          // ["rating", "gt", 4],
          // ["rating", "gte", 5],
          // ["rating", "between", [3, 6]],
          //
          // // Dates (any valid date string format can be used).
          // ["publishedAt", "after", "2022-12-31"],
          // ["publishedAt", "before", "2020-01-01T00:00:00.000Z"],
          // ["publishedAt", "day", "Wed, 01 Jan 2020 00:00:00 GMT"],
          // ["publishedAt", "month", "January 2020"],
          // ["publishedAt", "year", "2023"],
        ],
      },
    },
  },
};
