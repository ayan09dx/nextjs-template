import React,{useState} from 'react'
import axios from 'axios';
import ProgressBar from "@ramonak/react-progress-bar";
import { AiOutlineCloudUpload,AiOutlineDelete } from 'react-icons/ai';
import BottomNav from '../components/BottomNav';
export default function FileUpload(){

  const [image, setImage] = useState(null);
  const [uploadPercentage, setuploadPercentage] = useState(0);
  const [errortype, setErrorType] = useState(false);
  const [errorSize, setErrorSize] = useState(false);
  const [uploadBar, setUploadBar] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorUpload, setErrorUpload] = useState(false);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  

  const fileName=(type)=>{
   if(type==="image/png") return ("ayan.png");
   else if(type==="image/jpg") return ("ayan.jpg");
   else if(type==="image/jpeg") return ("ayan.jpeg");
  }

  const checkSize=(size)=>{
    if(size>1048576){
      setErrorSize(true);
      return false
    }
    else{
      setErrorSize(false);
      return true
    }  
  }
  const checkType=(type)=>{
    if( type === "image/png" || type === "image/jpg" || type === "image/jpeg"){
      setErrorType(false);
      return true
      }
      else{
        setErrorType(true);
        return false
      }
  }

  const uploadToClient = (event) => {
    setImage(null);setSuccess(false);setErrorUpload(false)
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if(checkSize(file.size) && checkType(file.type)){
        setImage(file);
        setCreateObjectURL(URL.createObjectURL(file));
      }
    }
  };

  const uploadToServer = async () => {
    setUploadBar(true);
    const body = new FormData();
    body.append("file", image,fileName(image.type));
    const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (event) => {
           setuploadPercentage(Math.round((event.loaded * 100) / event.total));
        },
      };
  
      const response = await axios.post('/api/fileUpload', body, config);

      if(response.data.data==="success"){
        setUploadBar(false);
        setErrorUpload(false);
        setSuccess(true);
      }
      else{
        setSuccess(false);
        setErrorUpload(true);
      }

  };

  const handleClientDelete=()=>{
    setImage(null);
  }

    return(
    
      <div style={{padding:20}}>
        <br/>
        <div className="input-outlined">
          <input type="file" name="myImage" onChange={uploadToClient} />
          <i className="iconupload"><AiOutlineCloudUpload/></i>
          <input placeholder="Choose File" type="text" defaultValue={image?image.name:""}/>
          <label>Upload Image1</label>
        </div>
        <p className="texterror">{errorUpload?"Unable to upload.Try again..":""}</p>
          <p className="textsuccess">{success?"Image uploaded successfully..":""}</p>
        {(!errortype && image && !errorSize && !success)?
        <div className="imagepreview">
        <img src={createObjectURL} style={{width:'100%',objectFit:'contain'}}/>
        <i className="imagepreviewaction" onClick={handleClientDelete}><AiOutlineDelete/></i>
        </div>
        :<p className="texterror">{errortype?"Wrong file type":errorSize?"Image size can not be more than 1 MB":""}</p>
        }
        <br/>
      {uploadBar?
        <><ProgressBar
            bgColor="green"
            completed={uploadPercentage} /><br /></>
         :<></>}
      {image && !success?
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
          disabled={errortype || errorSize}
        >
          Confirm Upload
        </button>
        :<></>}
      </div>
    )
}