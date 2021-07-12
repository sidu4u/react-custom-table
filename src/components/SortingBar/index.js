import {useCallback} from 'react';

export default function SortingBar({updateSortDirection}){
    let sortAsc = useCallback(()=>updateSortDirection("asc"),[updateSortDirection]);
    let sortDesc = useCallback(()=>updateSortDirection("desc"),[updateSortDirection]);
    return(<>
    <button onClick={sortAsc}>Asc</button>
    <button onClick={sortDesc}>Desc</button>
    </>)
}