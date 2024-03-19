import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    // let {id,name,price}=this.props.courceData;
    let {id,ArabicName,EnglishName,description,benefit,effect,place,image,publicId}=this.props.herbData;

    return (
      // <div className='col-lg-4'>
      //   <h3>{name}</h3>
      //   <p>cource price is {price}</p>
      //   <button className='btn btn-primary' onClick={()=>this.props.increase(this.props.courceData)}>increase</button>
      //   <button className='btn btn-danger'onClick={()=>this.props.delete(id)}>delete</button>
      // </div>
      <div className='col-lg-4'>
         <h3>{ArabicName}</h3>
         <p> {EnglishName}</p>
         <p>{description}</p>
         <img src={image} width={'50px'}/>
       </div>
    )
  }
}
