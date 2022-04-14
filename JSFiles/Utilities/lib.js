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
const exceljs_1 = require("exceljs");
const protractor_1 = require("protractor");
var fs = require('fs');
var XLSX = require('xlsx');
var cell_value1;
class lib {
    static currentDateTime() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
                var hh = today.getHours();
                var m = today.getMinutes();
                var ss = today.getSeconds();
                var mils = today.getMilliseconds();
                var datetime = mm + dd + yyyy + hh + m + ss + mils;
                //  console.log("in date time mehod"+datetime);
                return datetime;
            }
            catch (ex) {
                console.log(ex);
            }
        });
    }
    static screenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /// promise response 
                var datetime;
                lib.currentDateTime().then((num) => {
                    datetime = num;
                    console.log(num);
                })
                    .catch((err) => {
                    console.log(err);
                });
                //// screen shot code 
                protractor_1.browser.takeScreenshot().then(function (fullpage) {
                    return __awaiter(this, void 0, void 0, function* () {
                        var stream = fs.createWriteStream('./screenshots/' + datetime + '.png');
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
    static PropertiesFileReader(key) {
        try {
            var rawContent = fs.readFileSync("DataFiles/data.properties");
            var propertyMap = {};
            var fullContent = rawContent.toString();
            var allPairs = fullContent.split(" ");
            for (var i = 0; i < allPairs.length; i++) {
                var keyValue = allPairs[i].split("=");
                propertyMap[keyValue[0]] = keyValue[1];
            }
            return propertyMap[key];
        }
        catch (ex) {
        }
    }
    static readAllExcelData(filename, sheet_name) {
        var cell_value;
        try {
            protractor_1.browser.manage().timeouts().implicitlyWait(30000);
            var workbook = XLSX.readFile(filename);
            var worksheet = workbook.Sheets[sheet_name];
            var Data = XLSX.utils.sheet_to_json(worksheet);
            Data.forEach(function (data) {
                var cell_value = data.col1;
                console.log(" " + cell_value);
                return cell_value;
            });
        }
        catch (ex) {
        }
    }
    static ExcelDataReader(filename, sheet_name) {
        try {
            protractor_1.browser.manage().timeouts().implicitlyWait(30000);
            var wb = new exceljs_1.Workbook();
            wb.xlsx.readFile(filename).then(function () {
                var sheet = wb.getWorksheet(sheet_name);
                var noOfRows = sheet.rowCount;
                for (let i = 1; i <= noOfRows; i++) {
                    cell_value1 = sheet.getRow(i).getCell(1).toString();
                    console.log("rows data" + sheet.getRow(i).getCell(1).toString());
                }
                console.log(" data  " + cell_value1);
            });
            return cell_value1;
        }
        catch (ex) {
        }
    }
}
exports.lib = lib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0aWVzL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQW1DO0FBQ25DLDJDQUFxQztBQUVyQyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksV0FBVyxDQUFBO0FBQ2YsTUFBYSxHQUFHO0lBSVosTUFBTSxDQUFPLGVBQWU7O1lBQ3hCLElBQUk7Z0JBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2xELElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBLGVBQWU7Z0JBQ3RFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUVuQyxJQUFJLFFBQVEsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUE7Z0JBRWxELCtDQUErQztnQkFD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