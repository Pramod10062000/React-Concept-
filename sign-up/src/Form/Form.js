import { useState } from 'react';
import './Form.css';

function Form() {

  

    const [geFormvalidation, setFormValidation] = useState({
        name: {
            required: true,
            pattern: /^[a-zA-Z\s]+$/,
            patternMessage: "Name is not according",
            requiredError: "Name Erorr",
            status: false
        },
        email: {
            required: true,
            pattern: /@+/,
            patternMessage: "Email must contain @",
            requiredError: "Email Error",
            status: false
        },
        password: {
            required: true,
            pattern: /^[a-zA-Z0-9@$_]{6,}$/,
            patternMessage: "Password is not according",
            requiredError: "Password Erorr",
            status: false
        },
        number: {
            required: true,
            pattern: /^[0-9]{6,11}$/,
            patternMessage: "Number is not according pattern",
            requiredError: "Number Erorr",
            status: false
        }
    })

    const [getUsername, setUsername] = useState('');
    const [getForm, setForm] = useState({
        name: '',
        email: '',
        password: '',
        number: '',
        gender: ''
    });
    const onChangeHandler = (event) => {

        setForm({
            ...getForm,
            [event.target.name]: event.target.value
        })
    }


    const onSubmitHandler = () => {
        let Formvalidation = geFormvalidation;
        for (let obj in geFormvalidation) {
            if (Formvalidation[obj]['required'] && !getForm[obj]) {
                Formvalidation[obj]['status'] = "required";
            }else if(true && !Formvalidation[obj]['pattern'].test(getForm[obj])){

                Formvalidation[obj]['status']='pattern';
            }
            else{
                Formvalidation[obj]['status']=false;
            }

        }
        setFormValidation({ ...Formvalidation });

        let email = getForm.email.split('@')[0];
        setUsername(`Hello ${email}`);
    }

    return (
        <div className="Form">
            <div className='Container'>
                Name:<input onChange={onChangeHandler} name="name" type='text' />
                {geFormvalidation['name']['status'] && <div className='Danger'>
                {geFormvalidation['name']['status'] == "required" ? geFormvalidation['name']['requiredError'] : geFormvalidation['name']['patternMessage']}
                </div>}
                Email:<input onChange={onChangeHandler} name="email" type='email' />
                {geFormvalidation['email']['status'] && <div className='Danger'>
                {geFormvalidation['email']['status'] == "required" ? geFormvalidation['email']['requiredError'] : geFormvalidation['email']['patternMessage']}
                </div>}
                Password:<input onChange={onChangeHandler} name="password" type='password' />
                {geFormvalidation['password']['status'] && <div className='Danger'>
                {geFormvalidation['password']['status'] == "required" ? geFormvalidation['password']['requiredError'] : geFormvalidation['password']['patternMessage']}
                </div>}
                Number:<input onChange={onChangeHandler} name="number" type='number' />
                {geFormvalidation['name']['status'] && <div className='Danger'>
                {geFormvalidation['number']['status'] == "required" ? geFormvalidation['number']['requiredError'] : geFormvalidation['number']['patternMessage']}
                </div>}
                Gender:<select onChange={onChangeHandler} name="gender">
                    <option>Please select Option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <button onClick={onSubmitHandler}>Submit</button>
            </div>
            <div className='Form'>
                <h1>{getUsername}</h1>

            </div>

        </div>
    );
}

export default Form;