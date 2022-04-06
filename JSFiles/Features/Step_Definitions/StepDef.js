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
var expect = chai_1.default.expect;
let objBasic = new Basic_1.Basic();
cucumber_1.Given('I launch the url {string}', { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        //await utils.openBrowser(url);
        yield UtiliesMethods_1.Utils.openBrowser(url);
    });
});
cucumber_1.When('again Button click', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await utils.click(objBasic.Butonclick);
        yield UtiliesMethods_1.Utils.click(objBasic.Butonclick);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQW1FO0FBQ25FLDJDQUF5RDtBQUN6RCxnREFBd0I7QUFFeEIsbURBQWdEO0FBQ2hELG1FQUF1RDtBQUV2RCxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFHM0IsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsVUFBZ0IsR0FBRzs7UUFFM0UsK0JBQStCO1FBQy9CLE1BQU0sc0JBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFakMsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUdGLGVBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBRS9DLDBDQUEwQztRQUMxQyxNQUFNLHNCQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUUzQyxDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBS0YsaUJBQU0sQ0FBQzs7UUFDSCxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUMxQixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBQzFDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtTQUN2QztJQUVMLENBQUM7Q0FBQSxDQUFDLENBQUEifQ==