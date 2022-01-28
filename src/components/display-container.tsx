import { render } from "@testing-library/react";
import { FunctionComponent, useState } from "react";
import MapWrapper from "./map/map-wrapper";
import { VideoPlayer } from './video-player';

export const DisplayContainer: FunctionComponent = ({}) => {

    // pull down the selected video ui state with a selector

    const [video, setVideo] = useState<boolean>(false)

    const toggleDisplay = () => {
        setVideo(!video)
    }

    return (
        <div>
            <button onClick={toggleDisplay}></button>
            <div>
                {video ? <VideoPlayer/> : <MapWrapper features={[]}/>}
            </div>
        </div>
    )
}