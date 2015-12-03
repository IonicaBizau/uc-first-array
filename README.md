# uc-first-array [![Support this project][donate-now]][paypal-donations]

Uppercase first character of each element in arrays of strings.

## Installation

```sh
$ npm i --save uc-first-array
```

## Example

```js
// Dependencies
const ucFirstArray = require("uc-first-array");

console.log(ucFirstArray(["foo", "bar", "Baz"]));
// => [ 'Foo', 'Bar', 'Baz' ]
```

## Documentation

### `ucFirstArray(input)`
Uppercase first character of each element in arrays of strings.

#### Params
- **Array** `input`: The input array of strings.

#### Return
- **Array** An array of strings having first characters uppercase.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`camelo`](https://github.com/IonicaBizau/camelo#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md