import { FunctionComponent, useState } from "react";
import MapWrapper from "./map/map-wrapper";
import Timeline from "./timeline";
import CommentsContainer from "./comments-container";
import ResultsContainer from "./results-container";
import SemanticQuery from './query/semantic-query';

export const QueryContainer: FunctionComponent = ({}) => {

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
    
    return (
        <div className="mw-100 vh-100 center bg-blue ph-ns">
            <div className="cf ph2-ns">
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
            </div>
        </div>
    )
}