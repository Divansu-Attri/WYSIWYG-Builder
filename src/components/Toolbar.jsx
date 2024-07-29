
import React from 'react';
import { useDrag } from 'react-dnd';   


function DraggableComponent({type, id}) {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type,
    item: { type, id }
  }))
  return collected.isDragging ? (
    <div ref={dragPreview}>{type}</div>
  ) : (
    <div style={{width:"auto",border:"1px solid gainsboro", padding:"5px", margin:"5px"}} ref={drag} {...collected}>
      {type}
    </div>
  )
}

const Toolbar = () => (
  <div className="toolbar">

    <DraggableComponent type="TEXT" id={Math.random().toString()}  />
    <DraggableComponent type="IMAGE" id={Math.random().toString()}  />
    <DraggableComponent type="BUTTON" id={Math.random().toString()}  />

  </div>
  
);

export default Toolbar; 

