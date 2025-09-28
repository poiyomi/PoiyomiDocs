import React from "react"
import ReactPlayer from "react-player"
import {
	MediaController,
	MediaControlBar,
	MediaTimeRange,
	MediaTimeDisplay,
	MediaVolumeRange,
	MediaPlaybackRateButton,
	MediaPlayButton,
	MediaSeekBackwardButton,
	MediaSeekForwardButton,
	MediaMuteButton,
	MediaFullscreenButton,
} from "media-chrome/react";

export default function PoiVideo({url}) {
	return (
		<MediaController 
			style={{
				width: "100%",
				aspectRatio: "16/9"
			}}
		><ReactPlayer
			slot="media"
			src={url} 
			controls={false}
			muted="true"
			playing={true}
			playsInLine="true"
			loop="true"
			style={{
				width: "100%", 
				height: "100%",
				"--controls": "none",
			}}
		></ReactPlayer>
		<MediaControlBar>
			<MediaPlayButton />
			<MediaTimeRange />
			<MediaTimeDisplay showDuration />
			<MediaMuteButton />
			<MediaVolumeRange />
			<MediaFullscreenButton />
		</MediaControlBar>
		</MediaController>
	);
}