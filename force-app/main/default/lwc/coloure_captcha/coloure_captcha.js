import { LightningElement, track } from 'lwc';
export default class Coloure_captcha extends LightningElement {
    @track styleColor;
    @track pickListValueList=[];
    @track rendomcolor;
    @track color;
    @track BackgroundColor;
    @track test;
    connectedCallback(){
        this.getrendomcolore();
    }
    applycolor(){
    //     // this.getrendomcolore();
    //     // let elementAll = document.querySelectorAll('div[data-id=el]');
    //     let elementAll = document.querySelectorAll('element');

    //     console.log('yash');
    //     console.log(elementAll);

    //     Array.from(elementAll).forEach(function(item){
    //         item.style.color = 'red';
    //         // item.innerHTML = this.color;
    //     })

    }

    getrendomcolore(){
        for(var i=1; i<=9; i++){
            console.log(i);
            const letter = "0123456789ABCDEF";
            this.color = "#";
            for (let j = 0; j < 6; j++) {
                this.color += letter[Math.floor(Math.random() * 16)];
            }
            console.log(this.color);
            this.BackgroundColor = 'background-color:' + this.color;

            this.pickListValueList.push(this.BackgroundColor);
            this.rendomcolor = this.pickListValueList[Math.floor(Math.random() * 9)];
        }
        // console.log('hoiiii ' +this.pickListValueList);
    }
    verfication_color_captcha(event){
        this.test = event.target.dataset.name;
        if (this.test==this.rendomcolor) {
            alert('you are verified');
            // this.pickListValueList=null;
        }
        else{
            alert('you are select wrong option');
            this.pickListValueList=[];
            this.getrendomcolore();
           
        }
    }


}