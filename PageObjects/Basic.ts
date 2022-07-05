import { ElementFinder, element, by, Button, promise, } from "protractor";
import { Utils } from "../Utilities/UtiliesMethods";
import { XpathMethods } from "../Utilities/XpathMethods";


export class Basic {
  

  // public static searchBar = element(by.xpath("//*[contains(text(),'Components')]"));
   public static searchBar = element(by.xpath("//a[@href='/components/button']"));

  static menu(text: any) {
    const Componentsmenu = element(by.xpath(XpathMethods.menuXpath(text)));
    return Componentsmenu;
  }


  static getCount() {

    var aa = Utils.webtableCount(XpathMethods.webtableRowCountXpath());
    return aa;

  }


  static getdata(num1: number, num2: number) {

    var aa = Utils.webtableData(XpathMethods.webtableCellDataXpath(num1, num2));
    return aa;

  }

  static scrolldown(text:any){
    const comp1 =element(by.xpath(XpathMethods.menuXpath(text)))
    return comp1;
  }


}


