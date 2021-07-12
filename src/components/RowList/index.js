import Row from "../Row";

export default function RowList({data}){
    return data.map(row=>(<Row key={row.name} data={row}/>));
}