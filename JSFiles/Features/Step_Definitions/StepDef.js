"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const Basic_1 = require("../../PageObjects/Basic");
const UtiliesMethods_1 = require("../../Utilities/UtiliesMethods");
const lib_1 = require("../../Utilities/lib");
var expect = chai_1.default.expect;
var text = "Components";
cucumber_1.Given('I launch the url {string}', { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield UtiliesMethods_1.Utils.openBrowser("www.google.com");
    });
});
cucumber_1.When('again Button click', { timeout: 60 * 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield UtiliesMethods_1.Utils.click(Basic_1.Basic.menu(lib_1.lib.PropertiesFileReader("menuname")));
        // var aa = await Basic.getCount();
        //   var aa= await  Basic.getdata(1,2);
        //  console.log("count is  = " + aa)
        yield UtiliesMethods_1.Utils.mouseDown(Basic_1.Basic.scrolldown("list"));
        yield UtiliesMethods_1.Utils.click(Basic_1.Basic.scrolldown("input"));
        yield protractor_1.browser.sleep(10000);
        // await browser.executeScript('arguments[0].scrollIntoView(true)', Basic.searchBar.getWebElement());
        //await Utils.click(Basic.searchBar);
        const cop = protractor_1.element(protractor_1.by.xpath("//input[@type='email']"));
        yield UtiliesMethods_1.Utils.sendKeys(cop, "nirmal");
        // await Utils.waitForElementVisible((Basic.searchBar));
        //let EC = ExpectedConditions;
        // browser.manage().timeouts().implicitlyWait(5000);
        // let condition = EC.presenceOf(element(by.id("Basic.searchBar")))
        // browser.wait(condition, 30000)
        // var Data  = lib.ExcelDataReader("DataFiles/Exceldata.xlsx","Sheet1");
        //console.log(Data)
        // expect(Data).to.equal('this is last row');
    });
});
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW1FO0FBQ25FLDJDQUE2RTtBQUM3RSxnREFBd0I7QUFFeEIsbURBQWdEO0FBQ2hELG1FQUF1RDtBQUV2RCw2Q0FBMEM7QUFFMUMsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLElBQUksR0FBVyxZQUFZLENBQUM7QUFFaEMsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBZ0IsR0FBRzs7UUFFMUUsTUFBTSxzQkFBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTlDLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFHRixlQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxFQUFFOztRQUdqRCxNQUFNLHNCQUFLLENBQUMsS0FBSyxDQUFDLGFBQUssQ0FBQyxJQUFJLENBQUMsU0FBRyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxtQ0FBbUM7UUFDbkMsdUNBQXVDO1FBQ3ZDLG9DQUFvQztRQUdwQyxNQUFNLHNCQUFLLENBQUMsU0FBUyxDQUFDLGFBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMvQyxNQUFNLHNCQUFLLENBQUMsS0FBSyxDQUFDLGFBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU1QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdCLHFHQUFxRztRQUVwRyxxQ0FBcUM7UUFFekMsTUFBTSxHQUFHLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUVyRCxNQUFNLHNCQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBQyxRQUFRLENBQUMsQ0FBQztRQVEvQix3REFBd0Q7UUFDeEQsOEJBQThCO1FBQzlCLG9EQUFvRDtRQUNwRCxtRUFBbUU7UUFDbkUsaUNBQWlDO1FBR2pDLHdFQUF3RTtRQUV4RSxtQkFBbUI7UUFDbkIsNkNBQTZDO0lBS2pELENBQUM7Q0FBQSxDQUFDLENBQUE7QUFhRixpQkFBTSxDQUFDOztRQUNILE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFRixnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzFCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssaUJBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDMUMsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1NBQ3ZDO0lBRUwsQ0FBQztDQUFBLENBQUMsQ0FBQSJ9