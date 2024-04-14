import axios from "axios";
import { useState } from "react";

const Form = () => {
    const [getData, setData] = useState({
        name: '',
        Language: '',
        Bio: '',
        id: ''


    })
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/student", getData).then((response) => {
            console.log(response.data)

        }).catch((error) => { console.log(error) });
    }
    const onChangeHandler = (event) => {
        setData({
            ...getData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input name="name" onChange={onChangeHandler} type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your data with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Language</label>
                    <input name="Language" type="text" onChange={onChangeHandler} class="form-control" id="Language" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Id</label>
                    <input name="id" type="number" onChange={onChangeHandler} class="form-control" id="ID" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Bio</label>
                    <input type="text" onChange={onChangeHandler} name="Bio" class="form-control" id="Bio" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Confirm Data</label>
                </div>
                <button onClick={onSubmitHandler} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}
export default Form