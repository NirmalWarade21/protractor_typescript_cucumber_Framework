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
var fs = require('fs');
class Utils {
    static openBrowser(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.get(url).then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield protractor_1.browser.driver.manage().window().maximize();
                    });
                });
            }
            catch (ex) {
                console.log(ex);
            }
        });
    }
    static click(byElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //await Utils.waitForElement(byElement);
                protractor_1.browser.sleep(3000);
                yield byElement.click();
                yield Utils.screenshot();
            }
            catch (ex) {
                console.log(ex);
            }
        });
    }
    static sendKeys(byElement, text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //await Utils.waitForElement(byElement);
                yield byElement.sendKeys(text);
            }
            catch (ex) {
                console.debug(ex);
            }
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
    static screenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.takeScreenshot().then(function (fullpage) {
                    return __awaiter(this, void 0, void 0, function* () {
                        var stream = fs.createWriteStream('./screenshots/basic.png');
                        yield stream.write(new Buffer(fullpage, 'base64'));
                        yield stream.end();
                    });
                });
            }
            catch (ex) {
                console.debug(ex);
            }
        });
    }
}
Utils.EC = protractor_1.protractor.ExpectedConditions;
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbGllc01ldGhvZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9VdGlsaXRpZXMvVXRpbGllc01ldGhvZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDJDQUE0RjtBQUc1RixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFdkIsTUFBYSxLQUFLO0lBTWQsTUFBTSxDQUFPLFdBQVcsQ0FBQyxHQUFROztZQUM3QixJQUFJO2dCQUNBLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOzt3QkFDeEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFFdEQsQ0FBQztpQkFBQSxDQUFDLENBQUE7YUFDTDtZQUNELE9BQU8sRUFBRSxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbkI7UUFDTCxDQUFDO0tBQUE7SUFJRCxNQUFNLENBQU8sS0FBSyxDQUFDLFNBQWM7O1lBQzdCLElBQUk7Z0JBRUEsd0NBQXdDO2dCQUV4QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBRTVCO1lBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNuQjtRQUNMLENBQUM7S0FBQTtJQUdELE1BQU0sQ0FBTyxRQUFRLENBQUMsU0FBYyxFQUFFLElBQVk7O1lBQzlDLElBQUk7Z0JBQ0Esd0NBQXdDO2dCQUV4QyxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFFbEM7WUFBQyxPQUFPLEVBQUUsRUFBRTtnQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBRXJCO1FBQ0wsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLGNBQWMsQ0FBQyxTQUFjOztZQUN0QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUM5RixDQUFDO0tBQUE7SUFHRCxNQUFNLENBQU8scUJBQXFCLENBQUMsU0FBYzs7WUFDN0MsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxvQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFDaEcsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLFVBQVU7O1lBQ25CLElBQUk7Z0JBQ0Esb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZSxRQUFROzt3QkFFaEQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixDQUFDLENBQUM7d0JBQ2hFLE1BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDcEQsTUFBUSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLENBQUM7aUJBQUEsQ0FBQyxDQUFBO2FBRUw7WUFBQyxPQUFPLEVBQUUsRUFBRTtnQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBRXJCO1FBQ0wsQ0FBQztLQUFBOztBQW5FTSxRQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUY5QyxzQkF3RUMifQ==