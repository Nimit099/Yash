import { LightningElement,track, wire } from 'lwc';
import ParentObject from '@salesforce/apex/objectSelection.fetchParentObject';
import section_One from '@salesforce/resourceUrl/Section1';
import section_Two from '@salesforce/resourceUrl/Section2';
import section_Three from '@salesforce/resourceUrl/Section3';
import fetchChildObject1 from '@salesforce/apex/objectSelection.fetchChildObject1';

export default class ObjectSelection extends LightningElement {
    section_One_img = section_One;
    section_Two_img = section_Two;
    section_Three_img = section_Three;
    @track temp_One = false;
    @track temp_Two = false;
    @track temp_Third = false;
    value1 = ''
    value2 = ''
    value3 = ''
     options_object1 = [];
     options_object2 = [];
     options_object3 = [];
     isModalOpen = true;
     spinnerDataTable;
    
    firstTemp(){
        this.temp_One = true;    
        this.temp_Two = false;
        this.temp_Third = false;
        this.openModal();
    }

    secondTemp(){
        this.temp_One = false;
        this.temp_Two = true;
        this.temp_Third = false;
        this.openModal();
    }

    thirdTemp(){
        this.temp_One = false;
        this.temp_Two = false;
        this.temp_Third = true;
        this.openModal();
    }   

// changes by NIMIT =====================================================

openModal() {
    // this.spinnerDataTable = true;
    this.isModalOpen = true;
    ParentObject()
    .then( result => {
        let opp = [];
        for(var i=0;i<result.length;i++)
    {
        opp.push({label : result[i] , value: result[i]});
    }
    this.options_object1 = opp;
    })
}


object1(event){
    this.value1 = event.detail.value;
    console.log(this.value1);
    if(this.value1 != '')
    {
        fetchChildObject1({parent : this.value1})
        .then( result => {
            console.log(result);
            let opp = [];
        for(var i=0;i<result.length;i++)
        {
            opp.push({label : result[i] , value: result[i]});
        }
        this.options_object2 = opp;
        })
    }
}

object2_1(event){
    this.value2 = event.detail.value;
    console.log(event.detail.value);
    if(this.temp_Third == true){
        for(var i=0;i<this.options_object2.length;i++)
        {
            if(event.detail.value == this.options_object2[i].value){
                this.options_object2.splice(i,1);
            }
        }  
        this.options_object3 = this.options_object2;
    }
}

object2_2(event){
    this.value3 = event.detail.value;
}

save(){
    console.log(this.value1);
    console.log(this.value2);
    console.log(this.value3);
    const object = ({p})
}

closeModal() {
    this.isModalOpen = false;
}



























}