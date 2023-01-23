import { LightningElement,track,wire } from 'lwc';
import getProgressindicator from '@salesforce/apex/customMetadata.getProgressindicator'; //import get getProgressindicator method from custom Metadata apex class
import getCaptchatype from '@salesforce/apex/customMetadata.getCaptchatype'; //import get getCaptchatype method from custom Metadata apex class
import ParentObject from '@salesforce/apex/objectSelection.fetchParentObject';
import section_One from '@salesforce/resourceUrl/Section1';
import section_Two from '@salesforce/resourceUrl/Section2';
import section_Three from '@salesforce/resourceUrl/Section3';
import fetchChildObject1 from '@salesforce/apex/objectSelection.fetchChildObject1';

export default class NewFormDetails extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = true;
    @track progressindicator;
    @track formdetails =true;
    @track objectselection = false;
    @wire(getProgressindicator) records;
    @wire(getCaptchatype) captcharecords;
    @track formtitle ;    //this variable used to store formtitle input value
    // progressindicator;     //this variable used to store progressindicator input value
    captchatype;    //this variable used to store captchatype input value



    section_One_img = section_One;
    section_Two_img = section_Two;
    section_Three_img = section_Three;
    @track temp_One = false;
    @track temp_Two = false;
    @track temp_Third = false;
    @track errorModal = false;
    value1 = ''
    value2 = ''
    value3 = ''
    options_object1 = [];
    options_object2 = [];
    options_object3 = [];
    isModalOpen = true;
    spinnerDataTable;





    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
        
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        // this.isModalOpen = false;
        // alert('you in close Modal');
        this.dispatchEvent(new CustomEvent('popupclose'));
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
    
    changeFormTitle(event){
        this.formtitle = event.target.value;
        console.log('Form Title :- '+this.formtitle);
        // alert('hiiii :- '+this.formtitle);
    }
    
    changeProgressIndicator(event){
        // this.progressindicator = event.target.value;
        // console.log('Progress Indicator :- '+this.progressindicator)
        // alert('hiiii :- '+this.progressindicator);
        this.template.querySelector('c-progress-indicator').tesmethod(event.target.value);
        // this.test2();
    }

    changeCaptchaType(event){
        // alert('hell');
        // this.captchatype = event.target.value;
        // console.log('Captcha Type :- '+this.captchatype);
        // alert('hiiii :- '+this.captchatype);
        this.template.querySelector('c-captcha-type').preview_chptchatype(event.target.value);
    } 
    next_bt(){
        if(this.formtitle != ' ' && this.formtitle !='' && this.formtitle != null){
            this.formdetails = false;
            this.objectselection = true;
        }
        else{
            // alert('Hii');
            this.errorModal = true;
        }
        
    }
    Previouus_bt(){
        this.formdetails = true;
        this.objectselection = false;
    }








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

// closeModal() {
//     this.isModalOpen = false;
// }
}