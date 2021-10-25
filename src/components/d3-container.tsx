import { FunctionComponent, useEffect, useRef } from "react";
import * as d3 from 'd3';

export const D3Container: FunctionComponent = ({}) => {
    const d3Container = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        d3.select(d3Container.current)
        .append("circle")
        .attr("r", 5)
        .attr("cx", window.screen.availWidth / 2)
        .attr("cy", window.screen.availHeight / 2)
        .attr("fill", "red")
    },[])

    return (
        <svg className="container" width={window.screen.availWidth} height={window.screen.availHeight} ref={d3Container}></svg>
    )

}