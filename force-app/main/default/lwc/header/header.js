import { LightningElement,api } from 'lwc';
import logo from '@salesforce/resourceUrl/logo';


export default class Header extends LightningElement {
    @api logo=logo;
}