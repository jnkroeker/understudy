import { FunctionComponent, useState } from "react";
import MapWrapper from "./map/map-wrapper";
import Timeline from "./timeline";
import CommentsContainer from "./comments-container";
import ResultsContainer from "./results-container";
import SemanticQuery from './query/semantic-query';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "0.5rem"
    },
    spacer: {
        flexGrow: 1
    },
    body: {
        padding: "0.5rem",
        width: "100%",
        height: "100%",
        flexGrow: 1
    }
})

export const QueryContainer: FunctionComponent = ({}) => {

    const classes = useStyles();

    const [setQueryParams, queryParams] = useState<any>({
        temporalFilter: '',
        geospatialFilter: '',
        tagFilters: []
    })

    const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        const {value} = event.currentTarget;
        setQueryParams((prevState: any) => ({
            ...prevState,
            tagFilters: [...prevState.tagFilters, value]
        }));
    }

    const submitQuery = () => {
        // build query string
    }
    //className="mw-100 vh-100 center bg-blue ph-ns"
    return (
        <div className={classes.root}> 
            <div className={classes.header}>
                <div className={classes.body}>
                    <MapWrapper features={[]}/>
                </div>
            </div>
            {/* <div className="cf ph2-ns">
                <div className="flex flex-column fl w-100 w-70-ns pa2">
                    <div className="outline bg-white">
                        <MapWrapper features={[{id:'123'}]}/>
                    </div>
                    <div className="outline bg-white pv4 mt3">
                        <Timeline/>
                    </div>
                    <div className="outline bg-white pv4 mt3">
                        <CommentsContainer/>
                    </div>
                </div>
                <div className="flex flex-column fl w-100 w-30-ns pa2">
                    <div className="outline bg-white pv4">
                        <SemanticQuery submitQuery={submitQuery} addTag={handleAddTag}/>
                    </div>
                    <div className="outline bg-white pv4 mt3">
                        <ResultsContainer/>
                    </div>
                </div>
            </div> */}
        </div>
    )
}