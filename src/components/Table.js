import {useState,useCallback} from 'react';
import RowList from "./RowList";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import SortingBar from "./SortingBar";
import usePagination from "../hooks/usePagination";
import useSearch from "../hooks/useSearch";
import useSorting from "../hooks/useSorting";

 function Table({data}){
    let [searchQuery,updateSearchQuery] = useState('');
    let [sortDirection,updateSortDirection] = useState();
    let searchedData = useSearch(data,searchQuery);
    let sortedData = useSorting(searchedData,sortDirection);
    let {previousPage,nextPage,currentPage,paginatedData} = usePagination(sortedData,5);
    let searchHandler = useCallback((event)=>{updateSearchQuery(event.target.value)},[]);
    return(<>
        <SearchBar updateSearchQuery={searchHandler}/>
        <SortingBar updateSortDirection={updateSortDirection} />
        <RowList data={paginatedData}/>
        <Pagination totalPages={Math.ceil(sortedData.length/5)} currentPage={currentPage} nextPage={nextPage} previousPage={previousPage}/>
    </>);
}

export default Table;