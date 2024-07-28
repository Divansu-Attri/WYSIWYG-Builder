
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
        <img src={src} style={{width:"auto"}} />
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
        background:"url('/demo.png')",
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


//Summary
//ImageComponent: Ye component ek draggable image element ko represent karta hai jo Canvas par specific position par render hota hai.
//Image Upload: handleImageUpload function ke through user image upload kar sakta hai aur image ko src state me set kiya jata hai. Jab image upload hota hai, to img element render hota hai jo image ko display karta hai.
//Positioning: left aur top props se image component ki position set ki jati hai.
//Is code ka goal hai ki user ek image upload kar sake aur us image ko Canvas par specific position par display kar sake.