export const SeriesCard = (props) => {
    return (
    <li>
    
      <div>
      <img 
        src={props.data.poster}
        alt={props.data.name}
        width="80%"
        height="60%"/>
      </div>
      
      <h2>Name: {props.data.name}</h2>
      <h3>Rating: {props.data.rating}</h3>
      <p>Summary: {props.data.summary}</p>

    </li>
    )
}
    
