import { useState, useEffect } from "react";
import "./index.css";
function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("http://localhost:3000/getAll_data")
      .then((res) => res.json())
      .then((info) => setData(info));
  };
  useEffect(() => {
    getData;
  }, []);

  return (
    <div className="container">
      <h1>Data list</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">price</th>
            <th scope="col">count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr scope="row" key={index} className="tr">
              <th>{index + 1}</th>
              <td>title:{item.title}</td>
              <td>price:{item.price}</td>
              <td>count:{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default App;
