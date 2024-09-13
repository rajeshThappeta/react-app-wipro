function Test2(props) {
  //{ counter : 100 ,incrementCounter : F, getDataFromChild:F }

    //state
    const b:number=123;

  return (
    <div className="bg-light p-5 mt-5">
      <h1 className="display-2">Test2 component</h1>
      <h2 className="text-danger">
        Data received from Parent : {props.counter}
      </h2>

      <button className="btn btn-success" 
                onClick={props.incrementCounter}>
        Increment parent state
      </button>
      {/* button to send state to parent */}
      <button className="btn btn-info" onClick={()=>props.getDataFromChild(b)}>
        Send state to Parent
      </button>
    </div>
  );
}

export default Test2;
