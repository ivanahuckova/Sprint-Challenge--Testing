1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

   _`describe` breaks your test suite into components. Depending on your test strategy, you might have a describe for each function in your class, each module of your plugin, or each user-facing piece of functionality._

   _`it` is where you perform individual tests. You should be able to describe each test like a little sentence, such as "it calculates the area when the radius is set". You shouldn't be able to subdivide tests further-- if you feel like you need to, use describe instead._

1. What is the point of `Test Driven Development`? What do you think about this approach?

   _`Test-driven development` (TDD) is a software development process that relies on the repetition of a very short development cycle: requirements are turned into very specific test cases, then the software is improved to pass the new tests, only. This is opposed to software development that allows software to be added that is not proven to meet requirements._

   _I think that using TDD might be useful for big, settled companies.TDD also forces good architecture. In order to make your code unit-testable, it must be properly modularized. Writing the tests first, various architectural problems tend to surface earlier. However, for startup environments the implementation code may not be ready for some time due to spending time writing tests first. It can be also hard to apply to existing legacy code.And unless everyone on the team correctly maintains their tests, the whole system can quickly degrade_

1. Mention three types of automated tests.
   - Integration test
   - Unit test
   - UI regression
