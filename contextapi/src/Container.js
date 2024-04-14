import Table from "./Table";

const Container=(props)=>{
return(
    <div>
        <h1>Container</h1>
        {props.counter}
        <Table counter={props.counter}/>



    </div>
   

);
}

export default Container