import {useState} from "react";
import "./Comment.css"
import React from 'react'

function Comment(props) {
  const textBoxStyle = {
    height:"30px",
    width:"500px",
    fontSize:"18px",
    borderRadius:"10px"
  }


  let [name, setName] = useState("")
  let [comment, setComment] = useState("")
  let [data, setData] = useState([])
  
  let [productID, setProductID] = useState(props.match.params.id)

  const handleTextChange = (event) => {
    const {value} = event.target;

    if(event.target.name === "name"){
      setName(name = value)
    }else if(event.target.name === "comment"){
      setComment(comment = value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data = [...data, {name, comment}])
  }


  return (

    <div className='section'>
      <div className = 'item'>
        <img className = 'item-pic' src = "" alt="item"/>
        <h2>product: {productID} </h2>
      </div>


      <div className="Comment">

        <form onSubmit={handleSubmit} style={{marginTop:"50px"}}>
          <label htmlFor="Name">Name</label>
          <br/><br/>
          
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name}
            style={textBoxStyle} 
            placeholder="Name..."
            onChange={handleTextChange}

          />

          <br/><br/>
          <label htmlFor="comment">Comment</label>
          <br/><br/>

          <input 
            type="text" 
            id="comment" 
            name="comment"
            value={comment}
            style={textBoxStyle} 
            placeholder="..."
            onChange={handleTextChange}

            />

          <br/><br/>
          <button type="submit" className="btn">Submit</button>
        </form>

        <hr style={{marginRight:"200px"}}/>
        
        <div>
          {data.lenght === 0 ? "" : data.map((item, i) => {
            return(
              <div key={i}>
                <h1>Name: {item.name}</h1>
                <p>Comment: {item.comment}</p>
              </div>
            ) 
          })}
        </div>

      </div>
    </div>
  );
}

export default Comment;

