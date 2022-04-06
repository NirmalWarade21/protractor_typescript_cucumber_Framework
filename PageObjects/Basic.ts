import { ElementFinder, element, by, Button } from "protractor";



export class Basic {

    Butonclick: ElementFinder;
  
    constructor() {
     
        this.Butonclick = element(by.xpath("//*[contains(text(),'Components')]"));
    }



}