
const log = require("../Log4jsConfigs/log4jsConfig").default;


export class XpathMethods {



    static menuXpath(text: any) {

        // xpath="//a[contains(@class, 'mat-button')]/span[ contains(text(),'Components')]"

        var str: string = String("//a[contains(@class, 'mat-button')]/span[ contains(text(),'");

        var str2: string = String("')]");

        var xpath: string = str + text + str2;

        log.info("xpath : " + xpath);

        return xpath;

    }
    //-----------------------table xpath-------------------------------

    static webtableRowCountXpath() {



        var str: string = String("//table-basic-example/table/tbody/tr");
        log.info("xpath : " + str);

        return str;

    }


    static webtableColumnDataXpath(num1: any) {
        ////table-basic-example/table/tbody/tr/td[]
        if (num1 == 0) {
            log.error("Error in webtableCellDataXpath number is passed zero :  ");
            throw new Error("Row number starts from 1");
        }

        var str: string = String("//table-basic-example/table/tbody/tr/td[");

        var str2: string = String("]");

        var xpath: string = str + num1 + str2;

        log.info("xpath : " + xpath);

        return xpath;

    }

    static webtableRowDataXpath(num1: any) {
        ////table-basic-example/table/tbody/tr/td[]
        if (num1 == 0) {
            log.error("Error in webtableCellDataXpath number is passed zero :  ");
            throw new Error("Row number starts from 1");
        }

        var str: string = String("//table-basic-example/table/tbody/tr[");

        var str2: string = String("]/td");

        var xpath: string = str + num1 + str2;

        log.info("xpath : " + xpath);

        return xpath;

    }

    static webtableCellDataXpath(num1: any, num2: any) {
        ////table-basic-example/table/tbody/tr[]/td[]
        if (num1 == 0 || num2 == 0) {
            log.error("Error in webtableCellDataXpath number is passed zero :  ");
            throw new Error("Row number starts from 1");
        }

        var str: string = String("//table-basic-example/table/tbody/tr[");
        var str2: string = String("]/td[");
        var str3: string = String("]");

        var xpath: string = str + num1 + str2 + num2 + str3;

        log.info("xpath : " + xpath);

        return xpath;

    }



}