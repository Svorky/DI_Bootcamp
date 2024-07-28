import "./Exercise.css"
export default function Exercise(){
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return(
        <>
        {/* <h1 style={{color: 'red', backgroundColor: 'lightblue'}}>This is a Header</h1> */}
        <h1 style={style_header}>This is a Header</h1>
        <p className='para'>This is a Paragraph</p>
        <a href="/">This is a link</a>
        <form>
            <h2>This is a Form</h2>
            <label htmlFor="name">Enter your name</label>
            <input type="text" name='name'/>
            <button type="button">Submit</button>
        </form>
        <h2>Here is an Image</h2>
        <br />
        <img src="logo192.png" alt="" />
        <h2>This is a List</h2>
        <ul>
            <li>Coffe</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
        </>
    )
}