import React from 'react';
import { Arrow, Clock, Fire, Check, Pending } from './Icons';


export type IconProps = {
	name?: string,
	className?: string
};

const Icon = ({
	name
}: IconProps) => {
	switch (name && name.toLowerCase()) {
		case 'arrow':
			return <Arrow className={`ico ico--${name}`} />;
		case 'clock':
			return <Clock className={`ico ico--${name}`} />;
		case 'fire':
			return <Fire className={`ico ico--${name}`} />;
		case 'check':
			return <Check className={`ico ico--${name}`} />;
		case 'pending':
			return <Pending className={`ico ico--${name}`} />;
		default:
			return <div></div>;
	}
};

export default Icon;
