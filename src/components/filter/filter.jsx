

function Filter(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input name="country" placeholder="Introduce una ciudad" type="text" />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default Filter;