import { Link, Outlet } from "react-router-dom";

//Dynamic nested route
const Users = (props) => {
    return (
        <div>

            <ul>{
                props.list.map((obj) => {
                    return (<li key={obj.id}>
                        <p>{obj.id}</p>
                        <Link to={obj.fullname}>{obj.fullname}</Link>

                    </li>)
                })
            }
            </ul>
<Outlet/>
        </div>
    );
}
export default Users;