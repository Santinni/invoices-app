import '../style/Button.scss';
import Icon from '../icons';

export type ButtonProps = {
	title?: string,
	variant?: 'contained' | 'outlined' | 'text',
	color?: 'primary' | 'secondary',
	size?: 'small' | 'medium' | 'large',
	withIcon?: boolean,
	onClick?: React.MouseEventHandler,
};

const Button = ({ title, variant, color, size, withIcon, onClick }: ButtonProps) => {

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
		if (!color || color === "primary") {
			return "button--colorPrimary"
		} else if (color === 'secondary') {
			return "button--colorSecondary"
		}
	}

	const sizeClass = () => {
		if (!size || size === "small") {
			return "button--small"
		} else if (size === "medium") {
			return "button--medium"
		} else if (size === "large") {
			return "button--large"
		}
	}

	return (
		<button onClick={onClick} className={`button ${variantClass()} ${colorClass()} ${sizeClass()}`}>
			{title}
			{
				withIcon && <Icon name="arrow" />
			}
		</button>
	)
}

export default Button
