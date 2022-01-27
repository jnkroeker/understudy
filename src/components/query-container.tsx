import { FunctionComponent, useState } from "react";
import Divider from "@material-ui/core/Divider";
import ResultsContainer from "./results-container";
import SemanticQuery from './query/semantic-query';
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { PERFORM_QUERY } from "../actions";

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
    const dispatch = useDispatch();

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

        //dispatch actions
        dispatch(PERFORM_QUERY)
    }

    return (
        <div className={classes.root}> 
            <div className={classes.header}>
                <div className={classes.body}>
                    <SemanticQuery submitQuery={submitQuery} addTag={handleAddTag}/>
                    <Divider/>
                    <ResultsContainer/>
                </div>
            </div>
        </div>
    )
}