
export default function useSorting(data,direction){
   if(direction==='asc'){
       return data.sort(({name:ele1},{name:ele2})=>{
           return ele1>ele2?-1:1;
       })
   }
   if(direction==='desc'){
        return data.sort(({name:ele1},{name:ele2})=>{
            return ele1<ele2?-1:1;
        })
    }

    return data;
   
}