# deku-swiper

> Carousel component for Deku

*Using the [Swiper Slider](http://idangero.us/swiper/api/).*


## Install

```
$ npm install --save deku-swiper
```


## Usage

```js
import Swiper from 'deku-swiper';

const options = {
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetweenSlides: 10
		}
	},
	centeredSlides: true,
	slidesPerView: 3,
	spaceBetween: 30
};

const render = () => (
	<Swiper options={options} onInit={x => console.log(x)} arrows loop pagination>
		<div><img src='http://placehold.it/960x500'/></div>
		<div><img src='http://placehold.it/960x400'/></div>
		<div><img src='http://placehold.it/960x550'/></div>
		<div><img src='http://placehold.it/960x450'/></div>
		<div><img src='http://placehold.it/960x350'/></div>
		<div><img src='http://placehold.it/960x300'/></div>
		<div><img src='http://placehold.it/960x600'/></div>
		<div><img src='http://placehold.it/960x250'/></div>
	</Swiper>
);

export default {render};
```


## Attributes

### arrows

Type: `boolean`  
Default: `false`

Show arrows.

### class

Type: `string`
Default: `'Swiper'`

Class to be added to the element.

### duration

Type: `number`
Default: `3000`

Delay between transitions in ms.

### loop

Type: `boolean`  
Default: `false`

Enable continuous loop mode.

### onInit

Type: `function`

Function that returns initialized Swiper instance.

### options

Type: `object`

Object with Swiper options. Available options can [be found here](http://idangero.us/swiper/api/).

### pagination

Type: `boolean`  
Default: `false`

Enable pagination indicators.

### play

Type: `boolean`  
Default: `false`

Activate autoplay.

### speed

Type: `number`  
Default: `300`

Duration of transition between slides in ms.

### vertical

Type: `boolean`  
Default: `false`

Displays a vertical slider.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
