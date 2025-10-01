import React from 'react'
import ReactPlayer from 'react-player'

// THIS IS A LEGACY VIDEO PLAYER COMPONENT. DO NOT USE!
// USE ReactVideo.js INSTEAD.

export default function PoiVideo({url}) {
	return (
		<ReactPlayer width="100%" height="100%" playing controls="false" muted loop='true' playsinline='true' url={url} />
	);
}