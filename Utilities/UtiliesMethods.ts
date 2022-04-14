


import { browser, by, element, ElementFinder, protractor, WebElementPromise } from "protractor";

const log = require("../Log4jsConfigs/log4jsConfig").default;

import { lib } from "./lib";




export class Utils {

    static PropertiesFileReader(PropertiesFileReader: any): any {
        throw new Error("Method not implemented.");
    }

    static EC = protractor.ExpectedConditions;


    //------------------------- browser.open ------------------------------
    static async openBrowser(url: any) {
        try {
            await browser.get(url).then(async function () {

                await browser.driver.manage().window().maximize();
                await browser.sleep(3000);

                log.info("Browser Opened : " + url);

            })
        }
        catch (ex) {
            console.log(ex);
        }
    }

    //----------------click method-----------------------------------------

    static async click(byElement: any) {
        try {

            //await Utils.waitForElement(byElement);

            browser.sleep(3000);

            await byElement.click();
            log.info("element click successful: ");
            await lib.screenshot();
            log.info("Screenshot taken !!! ");
            browser.sleep(3000);
        } catch (ex) {
            log.error("Error While element click :  " + ex);
        }
    }

    //---------------send keys ----------------------

    static async sendKeys(byElement: any, text: string) {
        try {
            //await Utils.waitForElement(byElement);

            await byElement.sendKeys(text);
            log.info("Send keys successful : ");
            await lib.screenshot();
            log.info("Screenshot taken !!! ");


        } catch (ex) {
            log.error("Error While send keys :  " + ex);
        }
    }


    static async wait(byElement: any) {
        await browser.manage().timeouts().implicitlyWait(byElement);
    }


    static async elementIsPresent(byElement: any) {
        await byElement.isPresent();
    }

    static async waitForElement(byElement: any) {
        await browser.wait(this.EC.presenceOf(element(byElement)), 30000, 'Element didnot found');
    }


    static async waitForElementVisible(byElement: any) {
        await browser.wait(this.EC.visibilityOf(element(byElement)), 30000, 'Element didnot found');
    }
    // ----------------------   Webtable methods --------------------------------------------------------

    static webtableCount(byElement: any) {
        console.log("Fetching number rows")

        //let foo = element.all(by.xpath("//tbody[1]/tr[1]")).count();

        let foo = element.all(by.xpath(byElement)).count();
        return foo;

    }


    // get row data and return it as list
    static webtableData(byElement: any) {


        let foo = element.all(by.xpath(byElement)).getText()
        return foo
    }

    // get the column data and return as list
    public webtableColumnData(columnNumber: number) {
        if (columnNumber == 0) {
            throw new Error("Column number starts from 1");
        }
        columnNumber = columnNumber + 1;
        let foo = element.all(by.xpath("//tr/td[" + columnNumber + "]")).getText()
        return foo
    }










}