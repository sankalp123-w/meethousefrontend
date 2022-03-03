import { useState,useEffect,useCallback,useRef } from "react"

export const useStateWithCallback = (initialState)=>{
const [state, setstate] = useState(initialState);
const cbRef= useRef();
 const udateState = useCallback(
     (newState,cb) => {
      cbRef.current=cb;
      setstate((prev)=>{
          return typeof newState ==='function'? newState(prev):newState;
      }) 
     },
     []);
     useEffect(() => {
         if(cbRef.current){
            cbRef.current(state);
            cbRef.current=null;
         }
     }, [state])
    

   return [state,udateState];
}