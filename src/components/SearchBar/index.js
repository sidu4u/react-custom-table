

export default function searchBar({updateSearchQuery}){
return(<input type="text" onKeyUp={updateSearchQuery}/>)
}