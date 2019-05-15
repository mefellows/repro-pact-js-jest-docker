const path = require("path");
// const { processMessage } = require('../../src/services/kafka/helpers/index');
const {
  Matchers,
  MessageConsumerPact,
  synchronousBodyHandler
} = require("@pact-foundation/pact");
const { somethingLike: like, term } = Matchers;

const processMessage = data => {
  return data;
};

const messagePact = new MessageConsumerPact({
  consumer: "some-consumer",
  dir: path.resolve(__dirname, "pacts"),
  pactfileWriteMode: "update",
  provider: "some-provider",
  logLevel: "trace"
});

describe("receive item", () => {
  test("accepts a valid item", () => {
    return messagePact
      .expectsToReceive("a valid item record")
      .withContent({
        data: {
          dummy: 1
        }
      })
      .verify(synchronousBodyHandler(processMessage));
  }, 30000);
});
