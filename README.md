# Pexels API

![Pexels](https://user-images.githubusercontent.com/17960677/100986645-7e375a00-3573-11eb-8c33-d5b6e0e1a03b.png) 

>**Unofficial Pexels API**

## Example

The Following Code snippet will help you understand how to use this.

```js
var Pexels = require("pexels-api");
var pex = new Pexels();

(async function() {
  await pex.login(email, password);
  // or
  await pex.addToken(token);
  // upload image
  await pex.upload(image_path);
})();
```

## Contributing

Thank you for your interest in contributing, If you feel like there's something missing or any new feature can be added, just create a PR and I will see the rest.

## Help

You can contact me on social media, Everything about me can be found [here](https://theabbie.github.io)

## Installation

### Requirements

* Node.Js installed

### Dev Dependencies

* Axios
* Form-Data

## Credits

* [Pexels](https://pexels.com) For Creating an excellent platform.

## Contact

Contact me anywhere, just visit [my portfolio](https://theabbie.github.io)

## License

This project is licensed under MIT License, See [LICENSE](/LICENSE) for more information
