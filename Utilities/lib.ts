import { Workbook } from "exceljs";
import { browser } from "protractor";

var fs = require('fs');
var XLSX = require('xlsx');
var cell_value1
export class lib {



    static async currentDateTime() {
        try {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');//January is 0!
            var yyyy = today.getFullYear();
            var hh = today.getHours();
            var m = today.getMinutes();
            var ss = today.getSeconds();
            var mils = today.getMilliseconds();

            var datetime = mm + dd + yyyy + hh + m + ss + mils

            //  console.log("in date time mehod"+datetime);
            return datetime;
        }

        catch (ex) {
            console.log(ex);
        }
    }



    static async screenshot() {


        try {

            /// promise response 
            var datetime: string | undefined
            lib.currentDateTime().then((num) => {
                datetime = num;
                console.log(num);
            })
                .catch((err) => {
                    console.log(err);
                });


            //// screen shot code 
            browser.takeScreenshot().then(async function (fullpage) {

                var stream = fs.createWriteStream('./screenshots/' + datetime + '.png');
                await stream.write(new Buffer(fullpage, 'base64'));
                await stream.end();
            })

        } catch (ex) {
            console.debug(ex);

        }
    }


    static PropertiesFileReader(key: string) {
        try {
            var rawContent = fs.readFileSync("DataFiles/data.properties")
            var propertyMap = {}
            var fullContent = rawContent.toString()
            var allPairs = fullContent.split(" ")
            for (var i = 0; i < allPairs.length; i++) {
                var keyValue = allPairs[i].split("=")
                propertyMap[keyValue[0]] = keyValue[1]
            }
            return propertyMap[key]
        }
        catch (ex) {

        }
    }

    static readAllExcelData(filename: string, sheet_name: string) {
        var cell_value
        try {
            browser.manage().timeouts().implicitlyWait(30000);

            var workbook = XLSX.readFile(filename);
            var worksheet = workbook.Sheets[sheet_name];
            var Data = XLSX.utils.sheet_to_json(worksheet);
            Data.forEach(function (data) {
                var cell_value = data.col1

                console.log(" " + cell_value);
                return cell_value

            })


        }

        catch (ex) {

        }
    }

    static ExcelDataReader(filename: string, sheet_name: string) {

        try {
            browser.manage().timeouts().implicitlyWait(30000);
            var wb = new Workbook();
            wb.xlsx.readFile(filename).then(function () {
                var sheet = wb.getWorksheet(sheet_name)
                var noOfRows = sheet.rowCount
                for (let i = 1; i <= noOfRows; i++) {

                    cell_value1 = sheet.getRow(i).getCell(1).toString()
                    console.log("rows data" + sheet.getRow(i).getCell(1).toString())

                }
                console.log(" data  " + cell_value1)

            })

            return cell_value1
        }

        catch (ex) {

        }

    }



}






