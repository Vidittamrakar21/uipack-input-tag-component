#  uipack-input-tag-component

 UI Input Tag component for React.js / Next.js to create tags in an input  

## Install
`npm i uipack-input-tag-component`


## Include

`import {InputTag}from  'uipack-input-tag-component'`;

## Usage

Add the component in your project 

```
const  getdata  = (data) =>{
console.log("mydata",data)
}

function  App() {
return (
<div  className="App">
<InputTag  data={getdata}></InputTag>
</div>
);
}

export  default  App;

```
This component requires one prop as **data** to retrieve all the tags that are marked in the input.
To get the tags that are marked in the input box,  create a function and pass this function in the InputTag Component as a prop to get all the tags in an array . refer the above code and getdata() function to get the tags.

[DEMO](https://uipack-input-tag-component.netlify.app/)

