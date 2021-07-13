import { useState, useCallback } from "react";
import RowList from "../RowList";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import SortingBar from "../SortingBar";
import Header from "../Header";
import usePagination from "../../hooks/usePagination";
import useSearch from "../../hooks/useSearch";
import useSorting from "../../hooks/useSorting";
import "./styles.css";

function Table({ data, columns }) {
  let [searchQuery, updateSearchQuery] = useState("");
  let [sortDirection, updateSortDirection] = useState();
  let searchedData = useSearch(data, searchQuery);
  let sortedData = useSorting(searchedData, sortDirection);
  let { previousPage, nextPage, currentPage, paginatedData } = usePagination(
    sortedData,
    5
  );
  let searchHandler = useCallback((event) => {
    updateSearchQuery(event.target.value);
  }, []);
  console.log("paginated data", paginatedData);

  return (
    <>
      <SearchBar updateSearchQuery={searchHandler} />
      <SortingBar updateSortDirection={updateSortDirection} />
      <div className="container">
        <Header columns={columns} />
        <RowList data={paginatedData} />
      </div>
      <Pagination
        totalPages={Math.ceil(sortedData.length / 5)}
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </>
  );
}

export default Table;
