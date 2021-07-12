

export default function Pagination({totalPages,currentPage,nextPage,previousPage}){
     let numbers = [];

     for(let i=0;i<totalPages;i++){
         numbers.push({value:i,selected:currentPage===i});
     }


    return (<>
    <button onClick={previousPage}>Prev</button>
     {
         numbers.map(({value,selected})=><h6 key={value}>{value}</h6>)
     }
    <button onClick={nextPage}>Next</button>
    </>);
}