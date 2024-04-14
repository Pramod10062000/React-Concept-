import { useState } from 'react';
import Count from './Count';

const CallBack=()=>{
    const [getAge,setAge]=useState(23);
    const [getSalary,setSalary]=useState(15000);

    const onSalaryHandler=()=>{
        setSalary(getSalary+1)

    }
    const onAgeHandler=()=>{
        setAge(getAge+1)
        
    }
    //if there is change in state then entire jsx will re-render and the data will get updated inside state
//this is jsx below here
return(
<div className='container'>
    <Count type="age" list={getAge} />
    <Count type="Salary" list={getSalary} />
    <h2>{getAge}</h2>
    <h2>{getSalary}</h2>
    <button onClick={onSalaryHandler}>Salary Hike</button>
    <button onClick={onAgeHandler}>AgeHike</button>
</div>
);
}

export default CallBack;
//in this program when we are trying to change age or salary any one then the count block is executed for 2 times one for age and 2 nd for salary
// this creates performace issues 