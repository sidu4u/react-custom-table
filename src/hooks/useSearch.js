

export default function useSearch(data,query){
     return query?data.filter(row=>row.includes(query)):data;
}