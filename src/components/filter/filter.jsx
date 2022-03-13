
import "./style.css"


function Filter(props) {
    return (

        <form onSubmit={props.onSubmit} class="filtercontainer">
            <input class="navinput" name="country" placeholder=" Write a city..." type="text" />
            <button class="navbutton" type="submit">Search</button>
        </form>
       
    )
}

export default Filter;