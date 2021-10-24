import { FunctionComponent, useEffect, useRef } from "react";
import { MediaPlayer, MediaPlayerClass } from "dashjs"

export const VideoPlayer: FunctionComponent = ({}) => {

    const video = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (video.current) {
            const src = "http://0.0.0.0:8080/video" //"https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
            const element = video.current;
            const player: MediaPlayerClass = MediaPlayer().create();
            player.initialize(element, src, true)
        }
    },[])

    return (
        <video id='video-player' ref={video} controls></video>
    )
}