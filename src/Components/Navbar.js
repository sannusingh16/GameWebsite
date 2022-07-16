/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState ,useEffect, useRef} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import LIST from "./list";


const NAV = () => {
    const symbol="</>"
    const [item,setitem]=useState([]);
    const [newitem,setnewitem]=useState([]);
    const [isloading,setisloading]=useState(false);
    const [error,seterror]=useState("");
    const gamesearchref=useRef();
    const filtersearch=useRef();
    const sortsearch=useRef();
    
    
     useEffect( ()=>{
       setisloading(true);
        async function fetchData() {
         await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
        .then((res)=>res.json()).then((data)=>{
          setitem(JSON.parse(JSON.stringify(data)));
          setnewitem(JSON.parse(JSON.stringify(data)));
        })
        .catch((err)=>{
            seterror(err);
        });
        
        
        }

        fetchData();
        setisloading(false);
    
        
    },[])
    const handlesubmit=()=>{
        const game=gamesearchref.current.value;
        const regex=new RegExp(`${game}`)
        let newItem=item.filter((obj)=> regex.test(obj.title));
        setnewitem(newItem);
    }
    const handlechange=()=>{
        const platform=filtersearch.current.value;
        let newItem=item.filter((obj)=> obj.platform===platform);
        setnewitem(newItem);
       
    }
    const handlechangesort=()=>{
        const sortype=sortsearch.current.value;
        if(sortype==="Score_asc"){
         setnewitem([].concat(newitem).sort((a,b)=>a.score-b.score));
        
        }
        else if(sortype==="Score_desc"){
            setnewitem([].concat(newitem).sort((a,b)=>b.score-a.score));
        }

    }
    const handlesubmitkey=(ev)=>{
       if(ev.key==='Enter'){
        const game=gamesearchref.current.value;
        const regex=new RegExp(`${game}`)
        let newItem=item.filter((obj)=> regex.test(obj.title));
        setnewitem(newItem);

       }
    }

    return ( 
        <>
        <nav className="navbar">
        
            <h1>{symbol} <a href="">Home</a></h1>
            
            <div className="navbar_list">
            <input type="search" placeholder="Search" ref={gamesearchref} onKeyDown={handlesubmitkey}/><button type="search" onClick={handlesubmit}><AiOutlineSearch /></button>
             <select onChange={handlechangesort} ref={sortsearch}>
                <option style={{display:"none"}}>Sort</option>
                <option value="Score_asc">Score Ascending</option>
                <option value="Score_desc">Score Desending</option>
             </select>
        
                <select onChange={handlechange} ref={filtersearch}>
                <option style={{display:"none"}}>Filter </option>
                <option value="PC">PC</option>
                <option value="PlayStation 3">PS-3</option>
                <option value="Xbox 360">Xbox 360</option>
                <option value="iPad">iPad</option>
                <option value="Macintosh">Macintosh</option>
                <option value="Nintendo DS">Nintendo DS</option>
                </select>
        
            </div>
            
        </nav>
        <LIST items={newitem} loading={isloading} error={error}/>
     </>
    
     );
    
     
}
 
export default NAV;