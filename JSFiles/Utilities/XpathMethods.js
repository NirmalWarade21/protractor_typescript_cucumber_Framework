"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = require("../Log4jsConfigs/log4jsConfig").default;
class XpathMethods {
    static menuXpath(text) {
        // xpath="//a[contains(@class, 'mat-button')]/span[ contains(text(),'Components')]"
        var str = String("//a[contains(@class, 'mat-button')]/span[ contains(text(),'");
        var str2 = String("')]");
        var xpath = str + text + str2;
        log.info("xpath : " + xpath);
        return xpath;
    }
    //-----------------------table xpath-------------------------------
    static webtableRowCountXpath() {
        var str = String("//table-basic-example/table/tbody/tr");
        log.info("xpath : " + str);
        return str;
    }
    static webtableColumnDataXpath(num1) {
        ////table-basic-example/table/tbody/tr/td[]
        if (num1 == 0) {
            log.error("Error in webtableCellDataXpath number is passed zero :  ");
            throw new Error("Row number starts from 1");
        }
        var str = String("//table-basic-example/table/tbody/tr/td[");
        var str2 = String("]");
        var xpath = str + num1 + str2;
        log.info("xpath : " + xpath);
        return xpath;
    }
    static webtableRowDataXpath(num1) {
        ////table-basic-example/table/tbody/tr/td[]
        if (num1 == 0) {
            log.error("Error in webtableCellDataXpath number is passed zero :  ");
            throw new Error("Row number starts from 1");
        }
        var str = String("//table-basic-example/table/tbody/tr[");
        var str2 = String("]/td");
        var xpath = str + num1 + str2;
        log.info("xpath : " + xpath);
        return xpath;
    }
    static webtableCellDataXpath(num1, num2) {
        ////table-basic-example/table/tbody/tr[]/td[]
        if (num1 == 0 || num2 == 0) {
            log.error("Error in webtableCellDataXpath number is passed zero :  ");
            throw new Error("Row number starts from 1");
        }
        var str = String("//table-basic-example/table/tbody/tr[");
        var str2 = String("]/td[");
        var str3 = String("]");
        var xpath = str + num1 + str2 + num2 + str3;
        log.info("xpath : " + xpath);
        return xpath;
    }
}
exports.XpathMethods = XpathMethods;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWHBhdGhNZXRob2RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0aWVzL1hwYXRoTWV0aG9kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUc3RCxNQUFhLFlBQVk7SUFJckIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFTO1FBRXRCLG1GQUFtRjtRQUVuRixJQUFJLEdBQUcsR0FBVyxNQUFNLENBQUMsNkRBQTZELENBQUMsQ0FBQztRQUV4RixJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakMsSUFBSSxLQUFLLEdBQVcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFFdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFFN0IsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQztJQUNELG1FQUFtRTtJQUVuRSxNQUFNLENBQUMscUJBQXFCO1FBSXhCLElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ2pFLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUdELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFTO1FBQ3BDLDJDQUEyQztRQUMzQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDWCxHQUFHLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7WUFDdEUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxHQUFHLEdBQVcsTUFBTSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFFckUsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLElBQUksS0FBSyxHQUFXLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXRDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRTdCLE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7SUFFRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsSUFBUztRQUNqQywyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ1gsR0FBRyxDQUFDLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMvQztRQUVELElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBRWxFLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQyxJQUFJLEtBQUssR0FBVyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztRQUV0QyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUU3QixPQUFPLEtBQUssQ0FBQztJQUVqQixDQUFDO0lBRUQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQVMsRUFBRSxJQUFTO1FBQzdDLDZDQUE2QztRQUM3QyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtZQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7WUFDdEUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxHQUFHLEdBQVcsTUFBTSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDbEUsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQixJQUFJLEtBQUssR0FBVyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXBELEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRTdCLE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7Q0FJSjtBQTVGRCxvQ0E0RkMifQ==