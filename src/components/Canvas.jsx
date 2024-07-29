import {useEffect, useState} from 'react';
import { useDrop } from 'react-dnd';  

import TextBox from './Textbox';
import ImageComponent from './Imagecomponent';
import ButtonComponent from './Buttoncomponent';

const Canvas = ({isPreview,canvasColor}) => {

  const [components, setComponents] = useState([]);   
  const [, drop] = useDrop(() => ({  

    accept: ['TEXT', 'IMAGE', 'BUTTON'],

    drop: (item, monitor) => { 
      

      if (!isPreview) {
        setComponents((components) => [
          ...components,
          { type: item.type, id: item.id },
        ]);
      }
    },
  }), [isPreview]);

  useEffect(()=>{
    console.log("components", components);
  },[components]);


  return (
    <>
    <div ref={drop} className={`canvas ${isPreview && 'preview'}`} style={{backgroundColor : canvasColor}} >

      {components.map((component, index) => {   
        switch (component.type) {
          case 'TEXT':
            return <TextBox key={index} isPreview={isPreview} id={component.id} />;
          case 'IMAGE':
            return <ImageComponent key={index} isPreview={isPreview} id={component.id} />;
          case 'BUTTON':
            return <ButtonComponent key={index} isPreview={isPreview} id={component.id} />;
          default:
            return <></>;
        }
   
      })}
    </div>
    </>
  );
};

export default Canvas;

