import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Test extends LightningElement {
    @track
state = {
title: 'Welcome to Lightning Web Components - Example!',
};
get options() {
return [
{
label: 'Label1',
value: 'Label1',
},
{
label: 'Label2',
value: 'Label2',
},
];
}
handleClick() {
// Display the save status
let combo1 = this.template.querySelector('[data-id="combo1"]')
console.log(combo1.value)
let result = this.template.querySelector('[data-id="result"]')
result.innerHTML = combo1.value
console.log(result)
}
}