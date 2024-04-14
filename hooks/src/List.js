import { useEffect } from "react";

const List = () => {

    //this method will be called only once where this component will be removed from dom to perform any 
    // activity on removal of this component
    //similar to component willunmount
    useEffect(() => {
        const Details = setInterval(() => {
            console.log("Interval is calling");
        }, 3000);
        //it will be executing continously until and unless u remove it using below statement
         return () => clearInterval(Details);
    }, []);
    return (
        <ul>
            <li>Virat</li>
            <li>Rohit</li>
            <li>Gill</li>
            <li>Shreyas</li>
        </ul>

    );

}
export default List;