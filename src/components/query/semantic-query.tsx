import { FunctionComponent, KeyboardEventHandler } from "react";

interface queryParams {
    submitQuery: () => void
    addTag: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
const SemanticQuery: FunctionComponent<queryParams> = ({submitQuery, addTag}) => {
    
    const handleAddTag = (event : React.KeyboardEvent<HTMLInputElement>) => {
        addTag(event)
    }

    return (
        <>
            <input type='text' placeholder='semantic query' onKeyDown={handleAddTag}></input>
            <button onClick={submitQuery}>Find</button>
        </>
    )
}

export default SemanticQuery;