
export default function Row ({data:{name,department,address,designation}}){
    return (<>
                <div className="cell">{name}</div>
                <div className="cell">{department}</div>
                <div className="cell">{address}</div>
                <div className="cell">{designation}</div>
    </>);
}