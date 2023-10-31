import { useEffect,useCallback } from "react";
import { useMemo, useState } from "react";

function getLength() {
    console.log('hello inside');
    let count  = 0;
    for(let i=0; i<10000; i++) {
        setTimeout(()=> {
        },1000);
        count++

    }
    return count;
}

function FirstChild({counter}) {
    let count  = useMemo(() => { return getLength() },[]);

    const abc =  useCallback(
      () => {
       console.log("window load");

       return () => {
        window.removeEventListener("load",abc);
       }
      },
      []
    );
    
    

    useEffect(() => {
        window.addEventListener("load",abc);

    },[])
    return(
        <>
        {count} -----
        {counter}
            {/* <button>Count</button> */}
        </>
    )
}

export default FirstChild;