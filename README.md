# Jest Pact Docker example

Simply run `docker build .` and it should run the test.

# Running with docker-compose

```
docker-compose -f docker-compose.yml run pact bash -c 'npm install && npm t'
```
Test fail with response:

```
 FAIL  __tests__/kafka-client.test.pact.js (22.988s)
  receive item
    ✕ accepts a valid item (5010ms)

  ● receive item › accepts a valid item

    Timeout - Async callback was not invoked within the 5000ms timeout specified by jest.setTimeout.Error:

      20 |
      21 | describe('receive item', () => {
    > 22 |   it('accepts a valid item', () => {
         |   ^
      23 |     return (
      24 |       messagePact
      25 |         .expectsToReceive('a valid item record')

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.it (__tests__/kafka-client.test.pact.js:22:3)
      at Object.describe (__tests__/kafka-client.test.pact.js:21:1)
```
