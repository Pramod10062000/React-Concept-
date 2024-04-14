import { useCallback, useState } from 'react';
import Count from './Count';

const CallBack = () => {
    const [getAge, setAge] = useState(23);
    const [getSalary, setSalary] = useState(15000);

    const onSalaryHandler = useCallback(() => {
        setSalary(getSalary + 1)
    }, [getSalary])

    const onAgeHandler = useCallback(() => {
        setAge(getAge + 1);
    }, [getAge])

    return (
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
