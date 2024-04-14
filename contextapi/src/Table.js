
import { UserContext } from './App';
import Button from "./Button";
//importing userContext 
//using this we can directly access props from app.js to /inside Table.js 
const Table =(props)=>{
    return(
        <div>
            <h1>Table</h1>
            {props.counter}
            <Button counter={props.counter}/>
            <UserContext.Consumer>
                {
                    obj=>{
                        return obj
                    }
                }
            </UserContext.Consumer>


        </div>
    );

}
export default Table