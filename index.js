/** @jsx dom */
import condenseKeys from 'condense-keys';
import dom from 'magic-virtual-element';
import objectAssign from 'object-assign';
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

const initialState = () => {
	return {
		active: 0
	};
};

const getPagination = pagination => pagination && <div class='swiper-pagination'/>;

const init = ({props}, el) => {
	const {children} = props;
	const container = el.querySelector('.swiper-container');

	if (container.swiper) {
		container.swiper.destroy(true, true);
		container.swiper = null;
	}

	if (children.length < 2) {
		return;
	}

	const {arrows, duration, loop, onInit, options, pagination, play, speed, vertical} = props;
	const swiper = new Swiper(container, condenseKeys(objectAssign({
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

const shouldUpdate = ({props}, nextProps) => JSON.stringify(props) !== JSON.stringify(nextProps);
const afterRender = ({props}, el) => requestAnimationFrame(() => init({props}, el));

const render = ({props}) => {
	const {arrows, children, pagination} = props;
	const items = children.map(x => <div class='swiper-slide'>{x}</div>);

	return (
		<div class={['Swiper', props.class]}>
			<div class='swiper-container'>
				<div class='swiper-wrapper'>
					{items}
				</div>
				{getArrows(arrows)}
				{getPagination(pagination)}
			</div>
		</div>
	);
};

export default {afterRender, defaultProps, initialState, propTypes, render, shouldUpdate};
