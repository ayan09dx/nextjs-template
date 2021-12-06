import React,{useState} from 'react'
import axios from 'axios';
import ProgressBar from "@ramonak/react-progress-bar";
import { AiOutlineCloudUpload,AiOutlineDelete } from 'react-icons/ai';
export default function FileUpload(){

  const [image, setImage] = useState(null);
  const [uploadPercentage, setuploadPercentage] = useState(0);
  const [errortype, setErrorType] = useState(false);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    setErrorType(false);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if( file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg"){
        setImage(file);
        setCreateObjectURL(URL.createObjectURL(file));
      }
      else{
          setErrorType(true);
      }
      
    }
  };

  const fileName=(type)=>{
   if(type==="image/png") return ("ayan.png");
   else if(type==="image/jpg") return ("ayan.jpg");
   else if(type==="image/jpeg") return ("ayan.jpeg");
  }
  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", image,fileName(image.type));
    const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (event) => {
           setuploadPercentage(Math.round((event.loaded * 100) / event.total));
        },
      };
  
      const response = await axios.post('/api/fileUpload', body, config);
  
     console.log('response', response.data);

  };
  console.log(errortype)
    return(
    
      <div style={{padding:20}}>
        <br/>
        <div className="input-outlined">
          <input type="file" name="myImage" onChange={uploadToClient} />
          <i className="iconupload"><AiOutlineCloudUpload/></i>
          <input placeholder="Choose File" type="text" defaultValue={image?image.name:""}/>
          <label>Upload Image1</label>
        </div>
        {!errortype?
        <div className="imagepreview">
        <img src={createObjectURL} style={{height:250,objectFit:'contain'}}/>
        <i className="imagepreviewaction"><AiOutlineDelete/></i>
        </div>
        :<p>Wrong file type</p>
        }
      
        <br/>
        <ProgressBar
        bgColor="green"
        completed={uploadPercentage}
        />
         <br/>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
          disabled={errortype}
        >
          Send to server
        </button>
      </div>
    )
}