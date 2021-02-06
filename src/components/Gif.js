import React from 'react'



export const Gif = ({ title, id, url }) => {

	return (
		<div key={id}>
			<h4>{title}</h4>
			<small>{ id }</small>
			<img key={id} alt={title} src={url} />
		</div>
	)
}
