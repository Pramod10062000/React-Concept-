import axios from "axios";
import { useEffect, useState } from "react";
const Table = () => {

  const [getData, setData] = useState([]);
  const [getFlag, setFlag] = useState(false);

  const initialData = () => {
    try {
      axios.get("http://localhost:8080/myapi").then((response) => {
        console.log(response.data)
        setData([...response.data]);
        setFlag(true);
      }).catch((err) => { console.log(err) })
    } catch (error) {
      console.log(error)

    }
  }
  //Acts as a constructor, it will be executed only once and only at the start of the code only once becuase of empty array bracket
  useEffect(() => {
    initialData();
  }, [])
  return (
    <div>
          <h1>Inside Table</h1>

      {getFlag ?
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Language</th>
            <th scope="col">Id</th>
            <th scope="col">Bio</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((obj,index) => {
            return (
              <tr key={index}>
                <th scope="row">{obj.name}</th>
                <td>{obj.Language}</td>
                <td>{obj.id}</td>
                <td>{obj.Bio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>:<h1 style={{textAlign:"center"}}>Some Error accurred</h1> }
    </div>
  )
}
export default Table