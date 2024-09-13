import Test2 from "./Test2";
import {useState} from 'react'


function Test1() {

    //counter state
    let [counter,setCounter]=useState(100);
    let [dataFromChild,setDataFromChild]=useState(0)

    //increment counter
    function incrementCounter(){
        setCounter(counter+1);
    }

    //function to get data from child
    function getDataFromChild(data){
       setDataFromChild(data)
    }   

  return (
    <div className="bg-secondary p-5">
        <h1 className="display-2 text-white">Test1 component</h1>
         <h2 className="text-warning">Counter : {counter}</h2>
         <button className="btn btn-warning" onClick={incrementCounter}>
            +
         </button>

         {/* data received from child */}
         <h2>Data from child is {dataFromChild}</h2>

        {/* nest test2 component */}
        <Test2  counter={counter} 
                incrementCounter={incrementCounter} 
                getDataFromChild={getDataFromChild}
                />
    </div>
  )
}

export default Test1