"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const UtiliesMethods_1 = require("../Utilities/UtiliesMethods");
const XpathMethods_1 = require("../Utilities/XpathMethods");
class Basic {
    static menu(text) {
        const Componentsmenu = protractor_1.element(protractor_1.by.xpath(XpathMethods_1.XpathMethods.menuXpath(text)));
        return Componentsmenu;
    }
    static getCount() {
        var aa = UtiliesMethods_1.Utils.webtableCount(XpathMethods_1.XpathMethods.webtableRowCountXpath());
        return aa;
    }
    static getdata(num1, num2) {
        var aa = UtiliesMethods_1.Utils.webtableData(XpathMethods_1.XpathMethods.webtableCellDataXpath(num1, num2));
        return aa;
    }
}
// public static searchBar = element(by.xpath("//*[contains(text(),'Components')]"));
Basic.searchBar = protractor_1.element(protractor_1.by.xpath("//a[@href='/components/input']"));
exports.Basic = Basic;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9CYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUEwRTtBQUMxRSxnRUFBb0Q7QUFDcEQsNERBQXlEO0FBR3pELE1BQWEsS0FBSztJQU1oQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQVM7UUFDbkIsTUFBTSxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBR0QsTUFBTSxDQUFDLFFBQVE7UUFFYixJQUFJLEVBQUUsR0FBRyxzQkFBSyxDQUFDLGFBQWEsQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUNuRSxPQUFPLEVBQUUsQ0FBQztJQUVaLENBQUM7SUFHRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVksRUFBRSxJQUFZO1FBRXZDLElBQUksRUFBRSxHQUFHLHNCQUFLLENBQUMsWUFBWSxDQUFDLDJCQUFZLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUUsT0FBTyxFQUFFLENBQUM7SUFFWixDQUFDOztBQXRCRCxxRkFBcUY7QUFDdEUsZUFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7QUFKakYsc0JBNEJDIn0=