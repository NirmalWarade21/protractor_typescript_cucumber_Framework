import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by, Runner } from "protractor"
import chai from "chai";

import { Basic } from "../../PageObjects/Basic";
import { Utils } from "../../Utilities/UtiliesMethods";

var expect = chai.expect;
 let objBasic = new Basic();


 Given('I launch the url {string}', { timeout: 60 * 1000 }, async function (url) {

    //await utils.openBrowser(url);
    await Utils.openBrowser(url);

})


When('again Button click', { timeout: 60 * 1000 }, async function () {

    // await utils.click(objBasic.Butonclick);
    await Utils.click(objBasic.Butonclick);

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