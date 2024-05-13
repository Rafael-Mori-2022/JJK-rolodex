import "./card.styles.css"

const Card = ({character}) => {
    const {id, name, status, grade, image_url} = character;

    return(
        <div className='card-container' key={id}>
            <h1 >{name}</h1>
            <img src={image_url} alt={name} />
            <p>Status: {status !== null && status.length ? status : 'Undefined!'}</p>
            <p>Grade: {grade !== null && grade.length ? grade : 'Undefined!'}</p>
        </div>
    );
}
    
export default Card;