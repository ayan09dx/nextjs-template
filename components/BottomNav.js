import React,{useState} from 'react'
import { AiOutlineCloudUpload,AiOutlineDelete } from 'react-icons/ai';
export default function BottomNav(){
const [selected,setSelected]=useState(0);

const onClick=(val)=>{
setSelected(val);
}

return(
    <div className="bottomnavcontainer">

      <div className={selected===0?"bttmnavbttn selected":"bttmnavbttn"} onClick={()=>onClick(0)}>
        <i className="bttmnavicon"><AiOutlineCloudUpload/></i>
        <p className="bttmnavbttnlabel">hi</p>
      </div>

      <div className={selected===1?"bttmnavbttn selected":"bttmnavbttn"} onClick={()=>onClick(1)}>
        <i className="bttmnavicon"><AiOutlineCloudUpload/></i>
        <p className="bttmnavbttnlabel">hi</p>
      </div>

      <div className={selected===2?"bttmnavbttn selected":"bttmnavbttn"} onClick={()=>onClick(2)}>
        <i className="bttmnavicon"><AiOutlineCloudUpload/></i>
        <p className="bttmnavbttnlabel">hi</p>
      </div>

      <div className={selected===3?"bttmnavbttn selected":"bttmnavbttn"} onClick={()=>onClick(3)}>
        <i className="bttmnavicon"><AiOutlineCloudUpload/></i>
        <p className="bttmnavbttnlabel">hi</p>
      </div>
      

    </div>
)
}