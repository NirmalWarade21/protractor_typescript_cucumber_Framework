"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const log = require("../Log4jsConfigs/log4jsConfig").default;
const lib_1 = require("./lib");
class Utils {
    static PropertiesFileReader(PropertiesFileReader) {
        throw new Error("Method not implemented.");
    }
    //------------------------- browser.open ------------------------------
    static openBrowser(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.get(url).then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield protractor_1.browser.driver.manage().window().maximize();
                        yield protractor_1.browser.sleep(3000);
                        log.info("Browser Opened : " + url);
                    });
                });
            }
            catch (ex) {
                console.log(ex);
            }
        });
    }
    //----------------click method-----------------------------------------
    static click(byElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //await Utils.waitForElement(byElement);
                protractor_1.browser.sleep(3000);
                yield byElement.click();
                log.info("element click successful: ");
                yield lib_1.lib.screenshot();
                log.info("Screenshot taken !!! ");
                protractor_1.browser.sleep(3000);
            }
            catch (ex) {
                log.error("Error While element click :  " + ex);
            }
        });
    }
    //---------------send keys ----------------------
    static sendKeys(byElement, text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //await Utils.waitForElement(byElement);
                yield byElement.sendKeys(text);
                log.info("Send keys successful : ");
                yield lib_1.lib.screenshot();
                log.info("Screenshot taken !!! ");
            }
            catch (ex) {
                log.error("Error While send keys :  " + ex);
            }
        });
    }
    static wait(byElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.manage().timeouts().implicitlyWait(byElement);
        });
    }
    static elementIsPresent(byElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield byElement.isPresent();
        });
    }
    static waitForElement(byElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.EC.presenceOf(protractor_1.element(byElement)), 30000, 'Element didnot found');
        });
    }
    static waitForElementVisible(byElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.EC.visibilityOf(protractor_1.element(byElement)), 30000, 'Element didnot found');
        });
    }
    // ----------------------   Webtable methods --------------------------------------------------------
    static webtableCount(byElement) {
        console.log("Fetching number rows");
        //let foo = element.all(by.xpath("//tbody[1]/tr[1]")).count();
        let foo = protractor_1.element.all(protractor_1.by.xpath(byElement)).count();
        return foo;
    }
    // get row data and return it as list
    static webtableData(byElement) {
        let foo = protractor_1.element.all(protractor_1.by.xpath(byElement)).getText();
        return foo;
    }
    // get the column data and return as list
    webtableColumnData(columnNumber) {
        if (columnNumber == 0) {
            throw new Error("Column number starts from 1");
        }
        columnNumber = columnNumber + 1;
        let foo = protractor_1.element.all(protractor_1.by.xpath("//tr/td[" + columnNumber + "]")).getText();
        return foo;
    }
}
Utils.EC = protractor_1.protractor.ExpectedConditions;
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbGllc01ldGhvZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9VdGlsaXRpZXMvVXRpbGllc01ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLDJDQUFnRztBQUVoRyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFN0QsK0JBQTRCO0FBSzVCLE1BQWEsS0FBSztJQUVkLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBeUI7UUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFLRCx1RUFBdUU7SUFDdkUsTUFBTSxDQUFPLFdBQVcsQ0FBQyxHQUFROztZQUM3QixJQUFJO2dCQUNBLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOzt3QkFFeEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDbEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFFeEMsQ0FBQztpQkFBQSxDQUFDLENBQUE7YUFDTDtZQUNELE9BQU8sRUFBRSxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbkI7UUFDTCxDQUFDO0tBQUE7SUFFRCx1RUFBdUU7SUFFdkUsTUFBTSxDQUFPLEtBQUssQ0FBQyxTQUFjOztZQUM3QixJQUFJO2dCQUVBLHdDQUF3QztnQkFFeEMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXBCLE1BQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QixHQUFHLENBQUMsSUFB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