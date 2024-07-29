
import React, { useState } from 'react';
import AlignmentCmp from './AlignmentCmp';

const ImageComponent = ({ id, isPreview }) => {

  const [src, setSrc] = useState(""); 
  const [alignment, setAlignment] = useState("flex-start");

  const handleImageUpload = (e) => {

    const file = e.target.files[0];     

    const reader = new FileReader();     
    reader.onload = () => setSrc(reader.result);   
    reader.readAsDataURL(file);
  };


  return (
    <>
    {
      (src) ?
      <div style={{display:"flex",width:"100%",position:"relative",justifyContent: alignment || "flex-start" }}>
        <img src={src} style={{width:"auto"}} alt='description' />
        {
          !isPreview &&
          <AlignmentCmp alignment={alignment} setAlignment={setAlignment} />
        }
      </div>
      :
      !isPreview &&
      <div 
      style={{
        height:"200px", 
        width:"100%", 
        background:"gainsboro",
        position:"relative",
        backgroundImage:"url('/demo.png')",
        backgroundSize:"300px",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        cursor : "pointer",
        border : "1px solid gainsboro"
        }}>

          <label style={{
            position:"absolute",
            height : "100%",
            width : "100%",
            cursor: "pointer"
          }} htmlFor={id}></label>
          <input style={{opacity:0}} type='file' id={id} onChange={handleImageUpload} />

      </div>
    }
    </>
  );
};

export default ImageComponent;
