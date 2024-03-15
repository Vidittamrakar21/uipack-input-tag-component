import './style.css'
import * as React from 'react'
import { useState , useRef} from 'react';

type propstype = {
    data: Function
        
 
}

function InputTag (props: propstype) {

    const [tags, settags] = useState([]);
    const [val, setval] = useState("");
    const inp = useRef<HTMLInputElement>(null);

    const handleenter = (e: React.KeyboardEvent) =>{
        if(inp?.current?.value !== ""){
            if(e.key !== 'Enter'){
                return
            }
           
                //@ts-ignore
                settags([...tags, inp?.current?.value]);
                props.data([...tags, inp?.current?.value]);
                setval("")
            

        }
    }

    const handlesubmit = (e: React.MouseEvent<HTMLButtonElement>) =>{
        if(inp?.current?.value !== ""){
            //@ts-ignore
            settags([...tags, inp?.current?.value]);
            props.data([...tags, inp?.current?.value]);
            setval("")

        }
    }
 
    const handleinp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setval(e.target.value)
    }

    const removetag = (index:number) => {
        settags(tags.filter((el,i)=> i !== index))
        props.data(tags.filter((el,i)=> i !== index))
    }


    return(
        <div className='container'>
           
           {tags.map((item,index)=>(
             <div key={index} className='tag'>
             <span id='txt'>{item}</span>
             <span id='crs' onClick={()=>{removetag(index)}}>&times;</span>
             </div>
           ))}
         
   
            <input type="text" id='inp' placeholder='Type Here ..' value={val} ref={inp} onChange={handleinp} onKeyDown={handleenter} autoFocus={true}/>
            <button onClick={handlesubmit} id='but'>Add</button>
            

        </div>
    )
}

export default InputTag;