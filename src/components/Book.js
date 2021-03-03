const Book = ({ title, author, published, publisher, genre, description, onDelete }) => {
    return (
        <div className='book'>
            <h3>{title}</h3>
            <h3>{author}</h3>
            <p>{description}</p>
        </div>
    )
}


export default Book
