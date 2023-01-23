import { LightningElement,track,wire } from 'lwc';
import getProgressindicator from '@salesforce/apex/customMetadata.getProgressindicator'; //import get getProgressindicator method from custom Metadata apex class
import getCaptchatype from '@salesforce/apex/customMetadata.getCaptchatype'; //import get getCaptchatype method from custom Metadata apex class
export default class ModalPopupLWC extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
    @track isModalOpen = false;
    @track progressindicator;
    @wire(getProgressindicator) records;
    @wire(getCaptchatype) captcharecords;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
    // progressindicator;     //this variable used to store progressindicator input value
    captchatype;    //this variable used to store captchatype input value
    
    changeProgressIndicator(event){
        // this.progressindicator = event.target.value;
        // console.log('Progress Indicator :- '+this.progressindicator);
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
}