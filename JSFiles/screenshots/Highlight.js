"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Highlight {
    static highlightElement(elementtohighlight) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlnaGxpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2NyZWVuc2hvdHMvSGlnaGxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQXFDO0FBRXJDLE1BQWEsU0FBUztJQUVuQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQXVCO1FBRTFDLElBQUksV0FBVyxHQUFHLHVCQUF1QixDQUFDO1FBQzFDLElBQUksU0FBUyxHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6RCxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxtREFBbUQsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDN0csb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxVQUFVLEtBQUs7WUFDZCxJQUFJLFlBQVksR0FBRyx3QkFBd0IsR0FBRyxrQkFBa0IsQ0FBQztZQUNqRSxNQUFNLFlBQVksQ0FBQztZQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQixDQUFDLENBQUMsQ0FBQztRQUNILG9CQUFPLENBQUMsYUFBYSxDQUFDLG1EQUFtRCxFQUFFLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTlHLE9BQU8sa0JBQWtCLENBQUM7SUFDMUIsQ0FBQztDQUVKO0FBckJELDhCQXFCQyJ9