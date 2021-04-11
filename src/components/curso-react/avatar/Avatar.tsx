import React, {useState} from "react";

type Props = {
	id?: string,
	name?: string,
	size?: string
}

export const Avatar = ({id, name = 'Sin nombre', size}: Props)=>{

	const src = `https://randomuser.me/api/portraits/women/${id}.jpg`

	const [enabled, setEnabled] = useState<boolean>(true);

	const imgClassName = enabled ? '' : 'disabled';

	let pictureClassName = '';
	if (size) {
		if (size === 'small') {
			pictureClassName = 'is-small';
		} else if (size === 'large') {
			pictureClassName = 'is-large';
		}
	}


	return (
		<picture className={pictureClassName}>
			{id ? (<img
					onClick={()=>{
						setEnabled(!enabled)
					}}
					src={src}
					className={imgClassName}/>) :
				<i>Sin imagen</i>
			}
			<em>{name}</em>
		</picture>
	)
}