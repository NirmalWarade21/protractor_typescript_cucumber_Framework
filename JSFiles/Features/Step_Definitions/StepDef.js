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
const UtiliesMethods_1 = require("../../Utilities/UtiliesMethods");
var expect = chai_1.default.expect;
var text = "Components";
cucumber_1.Given('I launch the url {string}', { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield UtiliesMethods_1.Utils.openBrowser(url);
    });
});
cucumber_1.When('again Button click', { timeout: 60 * 100000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await Utils.click(Basic.menu(lib.PropertiesFileReader("menuname")));
        // var aa = await Basic.getCount();
        //   var aa= await  Basic.getdata(1,2);
        //  console.log("count is  = " + aa)
        yield protractor_1.browser.executeScript('window.scrollTo(0,10000)');
        console.log("scroll");
        yield protractor_1.browser.sleep(10000);
        // await browser.executeScript('arguments[0].scrollIntoView(true)', Basic.searchBar.getWebElement());
        //await Utils.click(Basic.searchBar);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW1FO0FBQ25FLDJDQUE2RTtBQUM3RSxnREFBd0I7QUFHeEIsbUVBQXVEO0FBSXZELElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxJQUFJLEdBQVcsWUFBWSxDQUFDO0FBRWhDLGdCQUFLLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLFVBQWdCLEdBQUc7O1FBRTFFLE1BQU0sc0JBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFakMsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUdGLGVBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsTUFBTSxFQUFFLEVBQUU7O1FBR2pELHNFQUFzRTtRQUN0RSxtQ0FBbUM7UUFDbkMsdUNBQXVDO1FBQ3ZDLG9DQUFvQztRQUdwQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdCLHFHQUFxRztRQUVwRyxxQ0FBcUM7UUFZckMsd0RBQXdEO1FBQ3hELDhCQUE4QjtRQUM5QixvREFBb0Q7UUFDcEQsbUVBQW1FO1FBQ25FLGlDQUFpQztRQUdqQyx3RUFBd0U7UUFFeEUsbUJBQW1CO1FBQ25CLDZDQUE2QztJQUtqRCxDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBYUYsaUJBQU0sQ0FBQzs7UUFDSCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUMxQixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBQzFDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtTQUN2QztJQUVMLENBQUM7Q0FBQSxDQUFDLENBQUEifQ==