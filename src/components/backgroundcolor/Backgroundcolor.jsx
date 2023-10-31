import { useState } from "react";

function BackgroundColor() {
   const [color, setcolor] = useState('pink');
   const setColorHandler = (val) => {
      setcolor(val)
   }

   return (
      <>
         <h1 style={{ color: `${color}` }}>BackgroundColor...</h1>
         <button onClick={() => setColorHandler('red')}>Red</button>
         <button onClick={() => setColorHandler('blue')}>Blue</button>
         <button onClick={() => setColorHandler('green')}>Green</button>
      </>
   )
}

export default BackgroundColor;