
const Count=(props)=>{
    console.log(props.type)
    return(
        <div> 
            {props.type} Count-{props.list}
            </div>
    );
      
    
    // return(
    //     <div>
    // <h1>{props.type}</h1>
    // <h1>{props.list}</h1>
    

    // </div>
    // );


}
export default Count