import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from '../Table/Table';
import './QuestionList.css';

const QuestionList = () => {

    const onSubmitHandler = () => {
        setFLag(true);
        console.log("go");
    }

    const [getList, setList] = useState([]);
    const [getAnswer, setAnswer] = useState([]);
    const [getFlag, setFLag] = useState(false);

    //whenever there is change in getList this useEffect method is going to get Executed
    useEffect(() => {
        console.log(getList);
    }, [getList])




    //whenever there is change happening in getList

    useEffect(() => {
        let obj = [];
        if (getList.length) {
            for (let data of getList) {
                obj.push({
                    Question: data.Question,
                    value: '',
                    id: data.id

                })
            }
            setAnswer([...obj]);
        }
    }, [getList])


    //this method is going to get executed only once and at start only. initial data loading activity
    useEffect(() => {
        initialData();
    }, [])



    //whenever there is change in getAnswer this useEffect method is going to get Executed
    useEffect(() => {
        console.log(getAnswer);
    }, [getAnswer])



    const onSelectionHandler = (id, data) => {
        console.log(id, data);
        let index;
        let list = getAnswer
        for (let i = 0; i < list.length; i++) {

            if (list[i].id === id) {
                index = i;
                break;
            }
        }
        list[index].value = data;
        setAnswer([...list]);


    }


    const initialData = async () => {

        try {
            const api = await axios.get("http://localhost:3000/DataStructures");
            setList([...api.data]);
            console.log(getList);
        } catch (err) {
            console.log(err);
        }
    }


    //map function is the only way to access objects inside json one by one that is iterating 
    //its a for loop of react that helps to access DB data/object one by one and put it in html
    return (
        <div className='Container'>
            {getList.map((obj, index) => {
                return (<div className='Hello' key={index} >
                    <h3>{obj.Question}</h3>
                    {obj.options.map((data, i) => {
                        ////data contains value like good avg , etc 
                        return (
                            <div key={i}>
                                <input type='radio' value={data} name={index} onClick={() => onSelectionHandler(obj.id, data)} />
                                {data}

                            </div>
                        );

                    })}

                </div>

                )
            })}
            <div>
                <button onClick={onSubmitHandler}>Submit</button>
            </div>
            <div>
                {getFlag && <Table global={getAnswer} />}
            </div>

        </div>
    )
}
export default QuestionList;