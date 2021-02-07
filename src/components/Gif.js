import React from 'react'
import './Gif.css'



export const Gif = ({ title, id, url }) => {

	return (
		<a href={`#${id}`} className="Gif" key={id}>
			<h4>{title}</h4>
			<img key={id} alt={title} src={url} />
		</a>
	)
}
