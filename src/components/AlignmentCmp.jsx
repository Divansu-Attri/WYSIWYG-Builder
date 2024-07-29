import React from 'react'

export default function AlignmentCmp({alignment,setAlignment}) {
  return (
    <div style={{
        position:"absolute",
        right : 0,
        top : 0,
        display:"flex",
        gap: 5,
        zIndex : 10
        }} >

            <div 
            onClick={()=>setAlignment("flex-start")}
            className={`alBox ${alignment == "flex-start" && "alBoxActive"}`}>
                left
            </div>
            <div 
            onClick={()=>setAlignment("center")}
            className={`alBox ${alignment == "center" && "alBoxActive"}`}>
                center
            </div>
            <div 
            onClick={()=>setAlignment("flex-end")}
            className={`alBox ${alignment == "flex-end" && "alBoxActive"}`}>
                right
            </div>
      
    </div>
  )
}

