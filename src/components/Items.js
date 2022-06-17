import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
// import { makeStyles } from '@material-ui/core/styles';

class Items extends Component {

    state = {
        productCode: "",
        productCodeError: "",
        productName: "",
        productNameError: "",
        brands:"",
        brandsError:"",
        category:"",
        categoryError:"",
        supplier:"",
        supplierError:"",
        data: [],
        dataError: []
    };

    change = e => {
      // this.props.onChange ({[e.target.name]: e.target.value });
      this.setState({[e.target.name]: e.target.value });
    };

    validate =() =>{
      let isError =false;
      const errors ={
            // productCode: "",
            productCodeError: "",
            // productName: "",
            productNameError: "",
            // brands:"",
            brandsError:"",
            // category:"",
            categoryError:"",
            // supplier:"",
            supplierError:"",
            // data: [],
            dataError: []
      };

      if (this.state.productName.length < 5){
        isError = true;
        errors.productNameError = "Product name must be atleast 5";
      }

      if (isError){
        this.setState({
          ...this.state,
          ...errors
        });
      }
      return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        const err = this.validate();
        if (!err) {
          this.props.onSubmit(this.state);
          //clear form
          this.setState({
            productCode: "",
            productCodeError: "",
            productName: "",
            productNameError: "",
            brands:"",
            brandsError:"",
            category:"",
            categoryError:"",
            supplier:"",
            supplierError:"",
            data: [],
            dataError: []
        });
        // this.props.onChange({
        //     productCode: "",
        //     productName: "",
        //     description: "",
        //     brands:"",
        //     quantity:"",
        //     category:""
        // });
      }
    };


    render() {
        return (
            <div>              
              
                <div >
                    <div >
                        <form onSubmit = {submission => this.setState({
                            data: [...this.state.data, submission]
                        })

                        }>
                        <TextField
                          id="standard-helperText"
                          type= "number"
                          label="Product Code"
                        //   hintText="Default Value"
                          helperText="*Must be a number*"
                          value={this.state.productCode} 
                          errorText={this.state.productCodeError}
                          onChange={e => this.setState({ productCode: e.target.value})}
                        />
                        <br /><br />

                        <TextField
                          id="standard-helperText"
                          type= "text"
                          label="Product Name"
                        //   hintText="Default Value"
                          helperText="*Must not be less than five*"
                          value={this.state.productName} 
                          errorText={this.state.productNameError}
                          onChange={e => this.setState({ productName: e.target.value})}
                        />
                        <br /><br />

                        <InputLabel htmlFor="select">Item Category</InputLabel>
                        <NativeSelect id="select"value={this.state.category} 
                          onChange={e => this.setState({category: e.target.value})}>
                            <option value=""> Select Category</option>
                            <option value="nike">Food and Drinks</option>
                            <option value="fendi">Clothing</option>
                            <option value="nestle">NESTLE</option>
                            {/* <option value="10">Ten</option>      */}
                        </NativeSelect>
{/* 
                        <TextField
                          id="standard-helperText"
                          type= "text"
                          label="Description"
                        //   hintText="Default Value"
                          helperText="eg. Peak Milk refill"
                          value={this.state.description} 
                          onChange={e => this.setState({ description: e.target.value})}
                        /> */}
                        <br /><br /> 

                        <InputLabel htmlFor="select">Quantity</InputLabel>
                        <NativeSelect id="select" value={this.state.quantity} 
                          onChange={e => this.setState({quantity: e.target.value})}>
                            <option value="" ></option>
                            <option value="10">Ten</option>
                            <option value="20">Twenty</option>
                            <option value="50">Fifty</option>
                            <option value="100">Hundred</option>
                        </NativeSelect>
                        <br /><br />

                        
                        <InputLabel htmlFor="select">Brand</InputLabel>
                        <NativeSelect id="select"value={this.state.brands} 
                          onChange={e => this.setState({brands: e.target.value})}>
                            <option value=""> Select Brand</option>
                            <option value="nike">NIKE</option>
                            <option value="fendi">FENDI</option>
                            <option value="nestle">NESTLE</option>
                            {/* <option value="10">Ten</option>      */}
                        </NativeSelect>
                        <br /><br />  

                        <InputLabel htmlFor="select">Supplier</InputLabel>
                        <NativeSelect id="select"value={this.state.supplier} 
                          onChange={e => this.setState({supplier: e.target.value})}>
                            <option value=""> Select Supplier</option>
                            <option value="miniso">MINISO</option>
                            <option value="gap">GAP</option>
                            <option value="nestle">NESTLE</option>
                            {/* <option value="10">Ten</option>      */}
                        </NativeSelect>
                        <br /><br />
                            <Button variant="contained" color="secondary" id="" onClick={e => this.onSubmit(e)}>Submit</Button>

                        </form>



                    </div>
                </div>
                
            </div>
        )
    }
}
export default Items