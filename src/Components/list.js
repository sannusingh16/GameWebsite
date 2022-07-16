
import { AiFillStar } from "react-icons/ai";





const LIST = ({items,loading,error}) => {
    
    
    
      if(loading && !error){
        return <h1>Loading...</h1>
      }
      else if(!loading && error){
        return <h3>{error}</h3>
      }
    
    return ( 
        <div className="grid">
        {items.map((obj,index)=>{if(obj.title) {return <div className="grids" key={index}>
        <div className="text">
            <h3>{obj.title}</h3>
            <p>{obj.platform}</p>
            <p>{obj.genre}</p>
            <p>{obj.editors_choice}<span><AiFillStar />{obj.score}</span></p>
            
     </div>
        </div>}})}
        </div>
    );
    }
export default LIST;