import React,{useState} from 'react'
import { Rating } from 'react-simple-star-rating'


function Card({setCartValue,details}) {
    let [toggle,setToggle] = useState(true)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0);
  return <>
    <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{details.product}</h5>
                    {details.price}
                    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    {
                        toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                            setCartValue(value=>value+1)
                            setToggle(false)
                        }}>
                            Add To Cart
                        </button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                        setCartValue(value=>value-1)
                        setToggle(true)
                    }}>
                        Remove
                    </button>
                    }
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Card