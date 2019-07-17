# JS Exercise 3: Regular Expressions Again

## Background & Objectives

The return of the [RegEx](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)! Good news, they're pretty similar to what you learnt in Ruby!

The only difference is the built-in way of testing one in JavaScript (vs. Ruby).

## Release 1

Open the `lib/valid_email.js`. Implement the `valid` function which takes one `email` parameter (of type `String`) and returns a `Boolean`: `true` if the email provided is valid, `false` if not. For example:

- `valid('joel.recodemalaysia.com')` should return `false`
- `valid('joel@recodemalaysia.com')` should return `true`

**First** you should find a `RegExp` that passes all the tests!

To do so, you can open the `spec/valid_email_spec.js` file and copy paste the tested emails in the `Your test string` textarea on [rubular](http://rubular.com/).

**Then**, you need to find a way to test this `RegExp` using JavaScript in the `valid` function, and return the right boolean!

Test your code by running `rake` regularly.