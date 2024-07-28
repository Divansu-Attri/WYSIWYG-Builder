
import React, { useRef, useState } from 'react';
import { DndProvider } from 'react-dnd'; 
import { HTML5Backend } from 'react-dnd-html5-backend';

import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import './App.css';

const App = () => {
  const [isPreview, setIsPreview] = useState(false);
  const editor = useRef();
  const [canvasColor,setCanvasColor] = useState("#f9f9f9");
  const [modalContent,setModalContent] = useState("");

  return (
    <>

    <DndProvider backend={HTML5Backend}>
      <div className="app">

        <div style={{width:"100%",display:"flex",justifyContent:"flex-end"}}>
        <button onClick={() => setIsPreview(!isPreview)}>
          {isPreview ? 'Edit Mode' : 'Preview Mode'}
        </button>
        {
          !isPreview &&
          <input type='color' value={canvasColor} onChange={(e)=> setCanvasColor(e.target.value)}></input>
        }
        {
          isPreview &&
          <button
          onClick={()=>{
            setModalContent(editor.current?.innerHTML)
          }}
          >Get Html</button>
        }
        </div>

        <div 
        className="editor" 
        ref={editor} >
          {!isPreview&&<Toolbar />}
          <Canvas isPreview={isPreview}canvasColor={canvasColor} />
        </div>
      </div>
    </DndProvider>
    {
      modalContent &&
      <div style={{
        position:"fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        width : "100vw",
        height : "100vh",
        background:"white"
      }}>

        <div style={{display:"flex",justifyContent:"flex-end",width:"auto"}}>
          <button 
          style={{width:"35px",height:"35px",cursor:"pointer"}}
          onClick={()=> setModalContent("")}
          >X</button>
        </div>
        <pre style={{width:"50%"}}>
          <code style={{width:"100%",whiteSpace:"break-spaces",wordWrap:"break-word"}}>
            {
              modalContent
            }
          </code>
        </pre>
      </div>
    }
    </>
  );
};

export default App;
