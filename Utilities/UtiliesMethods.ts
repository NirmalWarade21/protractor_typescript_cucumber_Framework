import { utimes } from "fs";
import { browser, element, ElementFinder, protractor, WebElementPromise } from "protractor";


var fs = require('fs');

export class Utils {

    static EC = protractor.ExpectedConditions;



    static async openBrowser(url: any) {
        try {
            await browser.get(url).then(async function () {
                await browser.driver.manage().window().maximize();
                
            })
        }
        catch (ex) {
            console.log(ex);
        }
    }



    static async click(byElement: any) {
        try {
        
            //await Utils.waitForElement(byElement);
         
            browser.sleep(3000);
            await byElement.click();
            await Utils.screenshot();
          
        } catch (ex) {
            console.log(ex);
        }
    }


    static async sendKeys(byElement: any, text: string) {
        try {
            //await Utils.waitForElement(byElement);
         
            await byElement.sendKeys(text);

        } catch (ex) {
            console.debug(ex);

        }
    }

    static async waitForElement(byElement: any) {
        await browser.wait(this.EC.presenceOf(element(byElement)), 30000, 'Element didnot found');
    }


    static async waitForElementVisible(byElement: any) {
        await browser.wait(this.EC.visibilityOf(element(byElement)), 30000, 'Element didnot found');
    }

    static async screenshot() {
        try {
            browser.takeScreenshot().then(async function(fullpage){

                 var stream = fs.createWriteStream('./screenshots/basic.png');
              await  stream.write(new Buffer(fullpage,'base64'));
             await   stream.end();
            })
           
        } catch (ex) {
            console.debug(ex);

        }
    }


}