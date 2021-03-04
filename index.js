'use strict';

class Select {
	constructor(id, initialValue) {
		this.container = $(id);
		this.container
			.find(`option[value="${initialValue}"]`)
			.prop('selected', true);
	}
}

const initValues = {
	fontSize: localStorage.fontSize ?? '16px',
	color: localStorage.color ?? '#000000',
	fontWeight: localStorage.fontWeight ?? '400',
	letterSpacing: localStorage.letterSpacing ?? 'normal',
	lineHeight: localStorage.lineHeight ?? 'normal',
	fontStyle: localStorage.fontStyle ?? 'normal',
}

const textContainer =$('.text-editor__content-inner').css(initValues);

function handleInputChange(event) {
	const { name, value } = event.target;

	textContainer.css(name, value);
	localStorage.setItem(name, value);
}

const fontSizeSelect = new Select('#fontSizeSelect', initValues.fontSize)
	.container.on('change', handleInputChange)

const fontWeightSelect = new Select('#fontWeightSelect', initValues.fontWeight)
	.container.on('change', handleInputChange);

const fontStyleSelect = new Select('#fontStyleSelect', initValues.fontStyle)
	.container.on('change', handleInputChange);

const letterSpacingSelect = new Select('#letterSpacingSelect', initValues.letterSpacing)
	.container.on('change', handleInputChange);

const lineHeightSelect = new Select('#lineHeightSelect', initValues.lineHeight)
	.container.on('change', handleInputChange);

const colorPicker = $('#textColorSelect')
	.prop('value', initValues.color)
	.on('input', handleInputChange);

const resetButton = $('#resetButton')
	.on('click', () => localStorage.clear());