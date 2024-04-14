import { useEffect, useState } from 'react';
import { NumberValidation, alphaNumberValidation, emailValidation, passwordValidation } from '../Validation';
import './Form.css';
const Form = () => {
    const [getGlobal,setGlobal]=useState(false);
    const [getForm, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phoneNo: '',
        bio: ''
    });
    const [getFormValid, setFormValid] = useState({
        first_name: false,
        last_name: false,
        email: false,
        password: false,
        phoneNo: false,
        bio: false
    });

    const formValidation=()=>{
        setFormValid({
            first_name: alphaNumberValidation(getForm.first_name),
            last_name: alphaNumberValidation(getForm.last_name),
            email: emailValidation(getForm.email),
            password: passwordValidation(getForm.password),
            phoneNo: NumberValidation(getForm.phoneNo),
            // bio: bioValidation(getForm.bio)
            bio:true
        })
    } 
    const onSubmitHandler = () => {
       
        setGlobal(true)
        

    }

    const onChangeHandler = (event) => {
        setForm({ ...getForm, [event.target.name]: event.target.value });
        formValidation();
    }
    useEffect(()=>{
        formValidation();
    },[getForm])
    return (

        <div className='container'>
            <div className="Form">
                <label>
                    FirstName:
                </label>
                <input type="text" onChange={onChangeHandler} name="first_name" placeholder="First Name ..." />
            </div>
            {getGlobal && getFormValid.first_name && <div className='Message'>First Name must be alphaNumeric and can contain 3 - 16 characters </div>}

            <div className="Form">
                <label>
                    LastName:
                </label>
                <input type="text" onChange={onChangeHandler} name="last_name" placeholder="Last Name..." />

            </div>
            { getGlobal && getFormValid.last_name && <div className='Message'>Last Name must be alphaNumeric and can contain 3 - 16 characters </div>}
            <div className="Form">
                <label>
                    Email:
                </label>
                <input type="email" onChange={onChangeHandler} name="email" placeholder="Email..." />
            </div>
            { getGlobal && getFormValid.email && <div className='Message'> Email must be a valid address example pramod1006@gmail.com</div>}
            <div className="Form">
                <label>
                    Password:
                </label>
                <input type="password" onChange={onChangeHandler} name="password" placeholder="Password..." />
            </div>
            <div className="Form">
                <label>
                    Phone Number:
                </label>
                <input type="number" onChange={onChangeHandler} name="phoneNo" placeholder="Phone Number..." />
            </div>
            {getGlobal && getFormValid.phoneNo && <div className='Message'>PhoneNumber must be numeric and 10 digits  only</div>}
            <div className="Form">
                <label>
                    Your Bio:
                </label>
                <input type="text" onChange={onChangeHandler} name="bio" placeholder="Enter Bio..." />
            </div>
            
            <div className="Form">
                <button onClick={onSubmitHandler}>Submit</button>
            </div>
        </div>
    )
}
export default Form