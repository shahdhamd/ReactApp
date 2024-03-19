import React, { Component } from 'react'
import Card from './Card'
export default class About extends Component {
    state={
        cources : [
            { id: 0, name: 'js', price: 200 },
            { id: 1, name: 'frontEnd', price: 500 },
            { id: 2, name: 'BackEnd', price: 500 }
        ]
    }


    increase = (cource) => {
        let preveCour=this.state.cources;  /// بخزن القيمة الداتا قبل
        cource.price++; /// بزيد قيمة البرايس للاوبجكت 
        this.setState({cource:preveCour})  // بستدعي الست ستست مشان يستدعي الريندر ويغير قيمة الداتا ع الفيوو
        
    }
    delete = ((id) => {
      /*  let preveCource=this.cources;  /// نخزن القيمة السابقة لداتا
        // انا معي داتا وبدي اعرف باي اندكس موجود
        let index=this.cources.indexOf(courec);
        preveCource.splice(index,1)  /// هو فعليا حذف الصف
        this.setState({cources:preveCource}) ////// استخدمته لان الريندر مسؤول عن عرض الفيوو بحيث ينفذ مرة واحدة ولا ينفذ عند حدوث تغير في الصفحة
        /// وفي حال صار تحديث بحتاج انادي الريتدر مشان يرجع يطبعلي التغيير لذلك استخدم */
        let cources = this.state.cources;  // تخزين القيمة قبل
        cources = cources.filter((elem) =>{
            return elem.id !== id}
        )
        this.setState({cources:cources})
        
    })
    render() {

        return (
            <div className='About'>
                <div className='row container text-center m-auto'>
                    {this.state.cources.map((elem) =>
                        <Card courceData={elem} increase={this.increase} key={elem.id} delete={this.delete}
                        />
                    )}
                </div>
            </div>
        )
    }
}

