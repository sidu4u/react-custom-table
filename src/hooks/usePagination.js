import {useState,useCallback} from 'react';


export default function usePagination(data,pageSize){
    const pageCount = Math.ceil(data.length/pageSize);
    let [currentPage,updatePage] = useState(1);
    const nextPage = useCallback(()=>{
        if(currentPage<pageCount){
             updatePage(currentPage+1);
        }
    },[currentPage,pageCount]);

    const previousPage = useCallback(()=>{
        if(currentPage>1){
             updatePage(currentPage-1);
        }
    },[currentPage]);


    return{
        nextPage,
        previousPage,
        currentPage,
        paginatedData:calculateCurrentPages(data,currentPage,pageSize)
    };


}

function calculateCurrentPages(data,currentPageNumber,pageSize){
    let previousPageNumber = currentPageNumber-1;
    let start = pageSize*previousPageNumber;
    let end = start+pageSize;

    return data.slice(start,end);
}