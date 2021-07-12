
export default function searchBar({updateSearchQuery}){
return(<input className="full" type="text" onKeyUp={updateSearchQuery}/>)
}