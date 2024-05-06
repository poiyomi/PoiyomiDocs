import React from 'react'
import ReactPlayer from 'react-player'

export default function PoiVideo({url}) {
	return (
		<ReactPlayer width="100%" height="100%" playing controls="false" muted loop='true' playsinline='true' url={url} />
	);
}