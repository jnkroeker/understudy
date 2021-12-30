import { FunctionComponent, useEffect, useRef } from "react";
import * as d3 from 'd3';
import data from '../data/miserables'
import { d3Types } from '../types/d3types'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    map: {
        width: "100%",
        height: "50vh",
        alignItems: "center",
    },
  })

export const D3Container: FunctionComponent = ({}) => {
    const classes = useStyles();
    const nodes = data.nodes;
    const ref = useRef<SVGSVGElement | null>(null)
    const createPie = d3.pie<d3Types.d3Node>().value((d: d3Types.d3Node) => d.group).sort(null)
    const createArc = d3.arc().innerRadius(100).outerRadius(200)
    const colors = d3.scaleOrdinal(d3.schemeCategory10)
    const format = d3.format(".2f")

    useEffect(() => {
        const chartData = createPie(nodes)
        const context: any = d3.select(ref.current)
        const groupWithData = context.selectAll("g.arc").data(chartData)

        groupWithData.exit().remove()

        const groupWithUpdate = groupWithData.enter().append("g").attr("class", "arc").attr("transform", "translate(" + window.screen.availWidth/4 + ',' + window.screen.availHeight/4 + ')')

        const path = groupWithUpdate.append("path").merge(groupWithData.select("path.arc"))

        path.attr("class", "arc").attr("d", createArc).attr("fill", (d: string, i: string) => colors(i))

        const text = groupWithUpdate.append("text").merge(groupWithData.select("text"))

        text
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("transform", (d: d3.DefaultArcObject) => `translate(${createArc.centroid(d)})`)
            .style("fill", "white")
            .style("font-size", 10)
            .text((d: any) => format(d.value))
    },[])

    return (
        <svg className={classes.map}>
            <g ref={ref}/>
        </svg>
    )

}