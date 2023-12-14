import {React,useState,useEffect} from 'react';

function Checkbox(props) {
  const {text,tick,checkBoxArr,no}=props
  const [check, setCheck] = useState(tick)

  useEffect(()=>{
    if(check==="checked"){
      checkBoxArr[no]=text;
    }
  },[])

  const tickCheckBox=()=>{
    if(check==="checked"){
      setCheck("");
      checkBoxArr[no]="";
    }
    else{
      setCheck("checked");
      checkBoxArr[no]=text;
    }
  }

  return (
    <div className='flex items-center'>
      <input className="h-5 w-5 mr-2" type="checkbox" checked={check} onChange={tickCheckBox}/>
      <label>
        {text}
      </label>
    </div>
  )
}

export default Checkbox