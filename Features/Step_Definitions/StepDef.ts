import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, Runner, ExpectedConditions } from "protractor"
import chai from "chai";

import { Basic } from "../../PageObjects/Basic";
import { Utils } from "../../Utilities/UtiliesMethods";

import { lib } from "../../Utilities/lib";

var expect = chai.expect;

var text: string = "Components";

Given('I launch the url {string}', { timeout: 60 * 1000 }, async function (url) {

    await Utils.openBrowser("www.google.com");

})


When('again Button click', { timeout: 60 * 100000 }, async function () {


    await Utils.click(Basic.menu(lib.PropertiesFileReader("menuname")));
    // var aa = await Basic.getCount();
    //   var aa= await  Basic.getdata(1,2);
    //  console.log("count is  = " + aa)


    await Utils.mouseDown(Basic.scrolldown("list"))
    await Utils.click(Basic.scrolldown("input"));

     await browser.sleep(10000);

   // await browser.executeScript('arguments[0].scrollIntoView(true)', Basic.searchBar.getWebElement());

    //await Utils.click(Basic.searchBar);

const cop=element(by.xpath("//input[@type='email']"))

await Utils.sendKeys(cop,"nirmal");







    // await Utils.waitForElementVisible((Basic.searchBar));
    //let EC = ExpectedConditions;
    // browser.manage().timeouts().implicitlyWait(5000);
    // let condition = EC.presenceOf(element(by.id("Basic.searchBar")))
    // browser.wait(condition, 30000)


    // var Data  = lib.ExcelDataReader("DataFiles/Exceldata.xlsx","Sheet1");

    //console.log(Data)
    // expect(Data).to.equal('this is last row');




})












Before(async function () {
    await browser.manage().deleteAllCookies();
})

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png")
    }

})




