/** @jsx dom */
import condenseKeys from 'condense-keys';
import dom from 'magic-virtual-element';
import objectAssign	from 'object-assign';
import Swiper from 'swiper';

const propTypes = {
	arrows: {
		type: 'boolean'
	},
	class: {
		type: 'string'
	},
	duration: {
		type: 'number'
	},
	loop: {
		type: 'boolean'
	},
	onInit: {
		type: 'function'
	},
	options: {
		type: 'object'
	},
	pagination: {
		type: 'boolean'
	},
	play: {
		type: 'boolean'
	},
	speed: {
		type: 'boolean'
	},
	vertical: {
		type: 'boolean'
	}
};

const defaultProps = {
	duration: 3000,
	loop: false,
	onInit: () => {},
	play: false,
	speed: 300
};

const initialState = () => ({active: 0});

const afterMount = ({props}, el) => {
	const {arrows, duration, loop, onInit, options, pagination, play, speed, vertical} = props;
	const swiper = new Swiper(el.querySelector('.swiper-container'), condenseKeys(objectAssign({
		autoplay: play && duration,
		autoplayDisableOnInteraction: false,
		direction: vertical ? 'vertical' : 'horizontal',
		loop,
		paginationClickable: true,
		speed
	}, options, {
		nextButton: arrows ? '.swiper-button-next' : null,
		pagination: pagination ? '.swiper-pagination' : null,
		prevButton: arrows ? '.swiper-button-prev' : null,
		slideClass: 'swiper-slide',
		wrapperClass: 'swiper-wrapper'
	})));

	onInit(swiper);
};

const getArrows = arrows => arrows && (
	<div class='Swiper-controls'>
		<div class='swiper-button-prev'/>
		<div class='swiper-button-next'/>
	</div>
);

const getPagination = pagination => pagination && <div class='swiper-pagination'/>;

const render = ({props}) => {
	const {arrows, children, pagination} = props;

	children.forEach(x => {
		x.attributes.class = `${x.attributes.class || ''} swiper-slide`;
	});

	return (
		<div class={['Swiper', props.class]}>
			<div class='swiper-container'>
				<div class='swiper-wrapper'>
					{children}
				</div>
				{getArrows(arrows)}
				{getPagination(pagination)}
			</div>
		</div>
	);
};

export default {afterMount, defaultProps, initialState, propTypes, render};
