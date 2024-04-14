import axios from 'axios';
import { Component } from 'react';
import Form from './FormComponent/Form';
import Table from './TableComponent/Table';
class App extends Component {


  //constructor is used to initialize state in class based definition
  // in class based , we have only on state  or we can use only one state
  constructor(props) {
    super(props);
    this.state = {
      //list is used to get the data from json file and to display it 
      list: [],
      formUpdate: {
        Product_Name: '',
        Price: ''
      }
    }
  }
  //replacement of useEffect()
  //first timne rendering and binding any api below method is used
  //WILL BE EXECUTED AT START AND ONLY ONCE SIMILAR TO useEffect
  componentDidMount() {
    this.getData();
  }
  onChangeHandler = (event) => {
    this.setState({
      formUpdate: {
        ...this.state.formUpdate, [event.target.name]: event.target.value
      }
    }
    )
  }
  // getData = () => {
  //   axios.get("http://localhost:3000/product").then(
  //     (response) => {
  //       console.log(response.data);
  //       this.setState({ list: response.data });
  //       console.log(this.state.list)
  //     }
  //   ).catch((error) => {
  //     console.log(error)

  //   });
  // }
  getData = async () => {
    try {

      //the function which is going to return promise there we will use await
      let result = await axios.get("http://localhost:3000/product");
      this.setState({ list: result.data });
    } catch (error) {
      console.log(error);
    }

  }
  onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      console.log(this.state.formUpdate);
      let r = await axios.post("http://localhost:3000/product", this.state.formUpdate);
      this.getData();
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect takes two args 1.CallBackFun 2.Empty Array Bracket
  //used to initialize / or execute a logic at the start of the program but only once
  render() {
    return (
      <>
        <h1>Table</h1>
        <Form onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} />
        {this.state.list && this.state.list.length > 0 && <Table data={this.state.list} />}
      </>

    )
  }
}
export default App;