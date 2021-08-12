import React from 'react';
import '../style/Button.scss';
import Icon from '../icons';

export type ButtonProps = {
	title?: string,
	variant?: 'contained' | 'outlined' | 'text',
	color?: 'default' | 'inherit' | 'primary' | 'secondary',
	size?: 'small' | 'large',
	withIcon?: boolean,
};

const Button = ({ title, variant, color, size, withIcon }: ButtonProps) => {

	const variantClass = () => {
		if (!variant || variant === "contained") {
			return "button--contained"
		} else if (variant === "outlined") {
			return "button--outlined"
		} else if (variant === 'text') {
			return "button--text"
		}
	}

	const colorClass = () => {
		if (!color || color === "default") {
			return "button--colorDefault"
		} else if (color === "primary") {
			return "button--colorPrimary"
		} else if (color === 'secondary') {
			return "button--colorSecondary"
		}
	}

	const sizeClass = () => {
		if (!size || size === "small") {
			return "button--small"
		} else if (size === "large") {
			return "button--large"
		}
	}

	return (
		<button className={`button ${variantClass()} ${colorClass()} ${sizeClass()}`}>
			{title}
			{
				withIcon && <Icon name="arrow" />
			}
		</button>
	)
}

export default Button
