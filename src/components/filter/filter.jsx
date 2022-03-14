import "./style.css";
import MyGeolocation from "../geolocation/geolocation";

function Filter({ handlerOnsubmit, handlerOnclick }) {
  return (
    <form onSubmit={handlerOnsubmit} class="filtercontainer">
      <div className="continput">
      <input
        className="navinput"
        name="country"
        placeholder=" Write a city..."
        type="text"
      />
      <MyGeolocation onClick={handlerOnclick}></MyGeolocation>
      </div>
      <button className="navbutton" type="submit">
        Search
      </button>
    </form>
  );
}

export default Filter;
