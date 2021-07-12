

export default function useSearch(data,query){
     return query?data.filter(({department})=>department.includes(query)):data;
}