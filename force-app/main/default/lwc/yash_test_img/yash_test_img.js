import { LightningElement,track } from 'lwc';
import myResource from '@salesforce/resourceUrl/imgcaptch';
import TRAILHEAD_LOGO from '@salesforce/resourceUrl/test_img';


export default class Yash_test_img extends LightningElement {
    trailheadLogoUrl = myResource;
    @track imageUrl;
    @track imageId;
    @track selection;
    @track correct = false;
    @track showBool = false;
    @track imageId_3;
    @track salesforceImageUrl_2;
    connectedCallback(){
        this.test();
    }
    test(){
        this.imageId_3 = Math.floor(Math.random() * 4);
        // alert('redom s :- '+this.imageId_3);
        this.imageId_3 = parseInt(this.imageId_3)+1;
        alert('redom+1 :- ' + this.imageId_3);
        this.imageUrl = 'Img_captch_'+this.imageId_3;
        alert('new img url :- '+this.imageUrl);
        // this.salesforceImageUrl_2 = Salesforce_Images+'/images/'+this.imageUrl;
        this.salesforceImageUrl_2 = this.trailheadLogoUrl+'/images/'+this.imageUrl+'.jpeg';
        alert('test img url :- '+this.salesforceImageUrl_2);
    }
    handleSelection(event) {
        this.selection = event.target.value;
    }
    test_submit(){
        if(this.imageId_3 == this.selection){
            alert('you are verifiedy');
        }
        else{
            alert('you select wrong option');
        }
    }
}