import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
export default class Home extends Component {
    state={
        herb:[]
    }
    async getRecipe(){
        let response=await axios.get('https://spotless-moth-rugby-shirt.cyclic.app/api/v1/herb/all')
        console.log('respose',response.data.herb)  
        this.setState({herb:response.data.herb})  // واضافة الداتا من اي بي اي للاريه واستدعاء الريندر لعرض التغير
    }
    componentDidMount(){
        this.getRecipe()
    }
  render() {
    return (
      <div>
        <div className='About'>
                <div className='row container text-center m-auto'>
                    {this.state.herb.map((elem) =>
                        <Card herbData={elem} key={elem._id}/>
                    )}
                </div>
            </div>
      </div>
    )
  }
}
