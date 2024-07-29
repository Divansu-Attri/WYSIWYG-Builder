
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';       

const TextBox = ({ id, isPreview }) => {
  const [value, setValue] = useState('');
 

  return (
    <>
         {
          isPreview ?
          <div dangerouslySetInnerHTML={{__html:value}}></div>
          :
          <ReactQuill theme="snow" value={value} onChange={setValue} />

         }
      

    </>
  );
};

export default TextBox;

