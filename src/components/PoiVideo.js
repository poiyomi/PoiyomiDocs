import React from "react"
import ReactPlayer from "react-player"

export default function PoiVideo({url}) {
	return (
		<ReactPlayer
			src={url} 
			muted={true}
			playing={true}
			playsinline={true}
			loop={true}
			style={{
				width: "100%", 
				height: "100%",
			}}
		></ReactPlayer>
	);
}