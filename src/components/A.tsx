import {useState} from 'react';


function A(){
    //state
  
   let [counter,setCounter] =useState(10);
   let [username,setUsername]=useState('rajesh');
   let [person,setPerson]=useState({pid:1,name:'bhanu',age:21});
   let [skills,setSkills]=useState(['css','react']);

    //add new skill
    function addNewSkill(){
        setSkills([...skills,'Angular'])
    }
    //delete a skill
    function deleteSkill(){
        let copySkills=[...skills];
        copySkills.pop();
        setSkills(copySkills)
    }


    //function to increment counter
    function incrementCounter(){
       setCounter(counter+1)
    }

    function changeUsername(){
        setUsername('Kiran')
    }

    function changePerson(){
        setPerson({...person,name:'vikas',age:30})
    }

    //return react element
    return(
        <div>
            <h1 className="display-1">Component A</h1>
            {/* counter */}
            <p className="display-3">{counter}</p>
            <button className="btn btn-success" onClick={incrementCounter}>Increment counter</button>

            {/* username */}
            <p className="display-3">{username}</p>
            <button className="btn btn-primary" onClick={changeUsername}>Change username</button>

            {/* person object */}
            <p className="display-3">{person.pid}</p>
            <p className="display-3">{person.name}</p>
            <p className="display-3">{person.age}</p>
            <button className="btn btn-secondary" onClick={changePerson}>Change person details</button>

            {/* skills array */}
            {
                skills.map(m=><p className='display-3' key={m}>{m}</p>)
            }

            <button className="btn btn-warning" onClick={addNewSkill}>Add new skill</button>
        
            
            <button className="btn btn-danger" onClick={deleteSkill}>delete skill</button>
        
        </div>
    )
}


export default A;








