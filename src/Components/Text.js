import React ,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Text(props) {
    const[text,settext] = useState(" ");
    //state in js is like declaration of variable in which text is a variable
    //settext is use to change state of text 
    function handleclick() {
        let name = text;
        settext(name.toUpperCase());
    }
    function handleonchange(event){
        settext(event.target.value);
    }
// event.target gives you the element that triggered the event.
// So, event.target.value retrieves the value of that element (an input field, in your example).
    return (
        <>
        <div className="container">
            <form>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea onChange={handleonchange} value={text} className="form-control"  id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="submit" onClick={handleclick} className="btn btn-primary">Convert to Upper Case</button>
            </form>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>Count of Characters : {text.length}<br></br>
            Count of words : {text.split(" ").length}<br></br>
            Time taken to read this text {(text.split(" ").length*0.008)*60 +" Seconds "}<br></br>
                </p>
        </div>
        </>
    )
}
