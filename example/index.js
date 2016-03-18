/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Slide from '../';

const options1 = {
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

const app = tree(
	<div>
		<Slide options={options1} onInit={x => console.log(x)} arrows loop pagination>
			<div><img src='http://placehold.it/960x500'/></div>
			<div><img src='http://placehold.it/960x400'/></div>
			<div><img src='http://placehold.it/960x550'/></div>
			<div><img src='http://placehold.it/960x450'/></div>
			<div><img src='http://placehold.it/960x350'/></div>
			<div><img src='http://placehold.it/960x300'/></div>
			<div><img src='http://placehold.it/960x600'/></div>
			<div><img src='http://placehold.it/960x250'/></div>
		</Slide>
		<Slide duration={2000} pagination play vertical>
			<div><img src='http://placehold.it/960x500'/></div>
			<div><img src='http://placehold.it/960x400'/></div>
			<div><img src='http://placehold.it/960x550'/></div>
			<div><img src='http://placehold.it/960x450'/></div>
			<div><img src='http://placehold.it/960x350'/></div>
			<div><img src='http://placehold.it/960x300'/></div>
			<div><img src='http://placehold.it/960x600'/></div>
			<div><img src='http://placehold.it/960x250'/></div>
		</Slide>
	</div>
);

render(app, document.body);
