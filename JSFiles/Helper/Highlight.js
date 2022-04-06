"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Highlight {
    Highlight(elementtohighlight) {
        var attribValue = "border:5px solid red;";
        var getattrib = elementtohighlight.getAttribute("style");
        protractor_1.browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", elementtohighlight, attribValue).then(function () {
            protractor_1.browser.sleep(1000);
            console.log("end of  highlight");
        }, function (error) {
            var errorMessage = "unable to highlight - " + elementtohighlight;
            throw errorMessage;
            console.error(error.stack);
        });
        protractor_1.browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", elementtohighlight, getattrib);
        return elementtohighlight;
    }
}
exports.Highlight = Highlight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlnaGxpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vSGVscGVyL0hpZ2hsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUFxQztBQUVyQyxNQUFhLFNBQVM7SUFDbEIsU0FBUyxDQUFDLGtCQUF1QjtRQUU3QixJQUFJLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQztRQUMxQyxJQUFJLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekQsb0JBQU8sQ0FBQyxhQUFhLENBQUMsbURBQW1ELEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdHLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsVUFBVSxLQUFLO1lBQ2QsSUFBSSxZQUFZLEdBQUcsd0JBQXdCLEdBQUcsa0JBQWtCLENBQUM7WUFDakUsTUFBTSxZQUFZLENBQUM7WUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxtREFBbUQsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU5RyxPQUFPLGtCQUFrQixDQUFDO0lBQzFCLENBQUM7Q0FFSjtBQXBCRCw4QkFvQkMifQ==