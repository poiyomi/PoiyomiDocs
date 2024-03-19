import React from 'react'
import ReactPlayer from 'react-player'

export default function PoiVideo({url}) {
	return (
		<ReactPlayer playing controls="false" muted loop='true' playsinline='true' url={url} />
	);
}