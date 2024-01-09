import React,{useState} from "react";


function InputArea(props){
    const [inpValue , setValue] = useState("");


    function handleChange(e){
        const text = e.target.value;
        setValue(text);
    }


    return(
        <>
            <div className="form">
                <input onChange={handleChange} type="text" value={inpValue} />
                <button onClick={()=>{
                    props.onAdd(inpValue);
                    setValue("")
                }}>
                <span>Add</span>
                </button>
            </div>
        </>
    ) 
}

export default InputArea