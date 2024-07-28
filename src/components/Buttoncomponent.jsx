import {useState} from 'react';
import AlignmentCmp from './AlignmentCmp';

const ButtonComponent = ({ id, isPreview }) => {  

  const [text, setText] = useState('Button');
  const [alignment, setAlignment] = useState("flex-start");

  return (
    <>

    <div 
    style={{display:"flex",width:"100%",position:"relative",justifyContent: alignment || "flex-start", padding:!isPreview ? "25px 0" : "0" }}
    >

      <button
      className="button-component"
      onClick={() => {
        !isPreview &&
        setText(prompt('Edit button text', text) || text);
      }}>

        {text}
      </button>
      {
        !isPreview &&
        <AlignmentCmp alignment={alignment} setAlignment={setAlignment} />
      }
    </div>
    </>
  );
};

export default ButtonComponent;
