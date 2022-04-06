"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Addcustomer {
    constructor() {
        this.addcustomerLink = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Add Customer')]"));
        this.firstName = protractor_1.element(protractor_1.by.model("fName"));
        this.lastName = protractor_1.element(protractor_1.by.model("lName"));
        this.postCode = protractor_1.element(protractor_1.by.model("postCd"));
        this.AddcustomerButton = protractor_1.element(protractor_1.by.xpath("//button[text()='Add Customer']"));
    }
}
exports.Addcustomer = Addcustomer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9BZGRDdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUt4RCxNQUFhLFdBQVc7SUFPcEI7UUFHSSxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUE7UUFFckYsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFFbEYsQ0FBQztDQUNKO0FBbkJELGtDQW1CQyJ9