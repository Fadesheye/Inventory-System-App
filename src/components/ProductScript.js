import React, { Component } from 'react'


class Product extends Component {

    constructor(productCode,productName,description,brands,supplier,price,category,quantity){
        this.productCode = productCode;
        this.productName =productName;
        this.description = description;
        this.brands = brands;
        this.supplier =supplier;
        this.price= price;
        this.category =category;
        this.quantity =quantity;

    }

    addProduct = () =>{
        let productCode = document.querySelector('#productCode');
        let productName = document.querySelector('#productName');
        let description = document.querySelector('#description');
        let brands = document.querySelector('#brands');
        let tbody = document.querySelector('#table-body');


        let newProduct= new Product(productCode.value, productName.value,description.value,brands.value);

        let newRow = document.createElement('tr');
        let emptyTd =document.createElement('td');
        let productCodeTd = document.createElement('td');
        let productNameTd = document.createElement('td');
        let descriptionTd = document.createElement('td');
        let brandsTd = document.createElement('td');


        emptyTd.innerHTML="";    
        productCodeTd.innerHTML = newProduct.productcode;
        productNameTd.innerHTML = newProduct.productName;
        descriptionTd.innerHTML = newProduct.description;
        brandsTd.innerHTML = newProduct.brands;


        newRow.appendChild(emptyTd);
        newRow.appendChild(productCodeTd);
        newRow.appendChild(productNameTd);
        newRow.appendChild(descriptionTd);
        newRow.appendChild(brandsTd);

        tbody.appendChild(newRow);
    }
    render() {
        return (
            <div>
                <button onSubmit = {this.addProduct}></button>
            </div>
        );
    }
}
export default Product