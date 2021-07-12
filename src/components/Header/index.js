

export default function Header({columns}){
    return (<>{columns.map(({title})=>(<div className="column" key={title}>{title}</div>))}</>);
}