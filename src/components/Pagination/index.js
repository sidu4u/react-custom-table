import "./styles.css";
import classNames from "classnames";

export default function Pagination({totalPages,currentPage,nextPage,previousPage}){
     let numbers = [];

     for(let i=1;i<=totalPages;i++){
         numbers.push({value:i,selected:currentPage===i});
     }


    return (<div className="pagination-container">
    <button onClick={previousPage}>Prev</button>
     {
         numbers.map(({value,selected})=><div className={classNames("page",{
             focus:selected
         })} key={value}>{value}</div>)
     }
    <button onClick={nextPage}>Next</button>
    </div>);
}