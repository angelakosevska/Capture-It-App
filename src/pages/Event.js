import {Link,} from "react-router-dom";
export function Event(){

    return (
    <>
    <h1>Event Name</h1>
    <div>Event description</div>
    <div className="eventCover">
        <Link to="/album">Album 1</Link>
        <br/>
        <Link to="/album">Album 2</Link>
    </div>
    </>)
}
//soodvetna pateka do albumite 
export default Event;