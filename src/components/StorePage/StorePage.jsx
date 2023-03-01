import { useEffect, useState } from "react";
import "./store.css";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import { useDispatch } from "react-redux";
import allActions from "../../actions";


export default function StorePage() {
  const [data, setData] = useState([])
  const [copydata,setcopydata]=useState(1)
  const apiCall = async (params) => {
    const response = await axios.get('https://dummyjson.com/products')
    setData(response.data.products)
  }
  console.log(data)
  useEffect(() => {
    apiCall()
  }, [])

const dispatch = useDispatch()
const add = (add) => {
  dispatch(allActions.cardAction())
  dispatch(allActions.itemAction(copydata))
  dispatch(allActions.price(add))  
}

useEffect(()=>{
  if(copydata <=0){
    setcopydata(1)
  }
},[copydata])

  return (
    <>
      <div className="container">
        {data.map((data,key) => {
          return (
            <div className="items">
              <SimpleImageSlider
                width={400}
                height={300}
                images={data.images}
                showBullets={true}
                showNavs={true}
              />
              <h1>{data.title}</h1>
              <p>{data.id}</p>
              <p>{data.description}</p>
              <p>{data.price}</p>
              <p>{data.discountPercentage}</p>
              <button onClick={()=>add(data.price)}>Add to cart</button>
              <label htmlFor={`faraz${key}`}  style={{width:"30px",marginLeft:"50px"}}>no of items:</label>
              <input type="number" id={`faraz${key}`} style={{width:"30px",marginLeft:"5px"}} value={copydata} onChange={(e)=>{setcopydata(e.target.value)}}/>
            </div>
          )
        })}
      </div>
    </>
  );
}
