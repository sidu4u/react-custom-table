import "./styles.css";

export default function Header({columns}){
    return (<>{columns.map(({title})=>(<div className="header" key={title}>{title}</div>))}</>);
}