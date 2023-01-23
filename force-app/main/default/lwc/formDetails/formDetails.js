// =======================================================================================
// MV Clouds Private Limited
// Author:Yash Shah
// Change Version History
// Version No.     Author                 Date                        Change Description   
//     1         Yash Shah              11-01-2023                         create
// ==========================================================================================
import { LightningElement,wire } from 'lwc';
import getProgressindicator from '@salesforce/apex/customMetadata.getProgressindicator'; //import get getProgressindicator method from custom Metadata apex class
import getCaptchatype from '@salesforce/apex/customMetadata.getCaptchatype'; //import get getCaptchatype method from custom Metadata apex class

export default class FormDetails extends LightningElement {
    formtitle;    //this variable used to store formtitle input value
    progressindicator;     //this variable used to store progressindicator input value
    captchatype;    //this variable used to store captchatype input value
    @wire(getProgressindicator) records;
    @wire(getCaptchatype) captcharecords;
    
    changeFormTitle(event){
        this.formtitle = event.target.value;
        console.log('Form Title :- '+this.formtitle);
        // alert('hiiii :- '+this.formtitle);
    }

    changeProgressIndicator(event){
        this.progressindicator = event.target.value;
        console.log('Progress Indicator :- '+this.progressindicator);
        // alert('hiiii :- '+this.progressindicator);
    }

    changeCaptchaType(event){
        this.captchatype = event.target.value;
        console.log('Captcha Type :- '+this.captchatype);
        // alert('hiiii :- '+this.captchatype);
    } 
}