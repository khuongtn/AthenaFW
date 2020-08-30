"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRouteAssignmentPage = void 0;
const protractor_1 = require("protractor");
const DatePicker_1 = require("../../../../common/DatePicker");
class VehicleRouteAssignmentPage {
    constructor() {
        this.chbFrequency = protractor_1.element(protractor_1.by.xpath('//a[text() = " Vehicle-Route Assignment"]'));
        this.txtFromDate = protractor_1.element(protractor_1.by.xpath("//input[@name = 'fromDate']"));
        this.btnCalendarFromDate = protractor_1.element(protractor_1.by.xpath("//input[@placeholder = 'fromDate']//following-sibling::button"));
        this.txtToDate = protractor_1.element(protractor_1.by.xpath("//input[@name = 'toDate']"));
        this.btnCalendarToDate = protractor_1.element(protractor_1.by.xpath("//input[@placeholder = 'toDate']//following-sibling::button"));
        this.txtCapacity = protractor_1.element(protractor_1.by.name('capacity'));
        this.txtSpED = protractor_1.element(protractor_1.by.name('spEd'));
        this.txtStartTime = protractor_1.element(protractor_1.by.xpath('//label[text() = "Start Time "]//following-sibling::div/div[@class = "inputPrettyTimes"]'));
        this.btnStartTime = protractor_1.element(protractor_1.by.xpath('//label[text() = "Start Time "]//following-sibling::div/i[@id = "timePickerContent"]'));
    }
    setFromDate(fromdate) {
        this.btnCalendarFromDate.click();
        let datepk = new DatePicker_1.DatePicker();
        datepk.selectDate(fromdate);
    }
    setToDate(todate) {
        this.btnCalendarToDate.click();
        let datepk = new DatePicker_1.DatePicker();
        datepk.selectDate(todate);
    }
    setCapacity(capacity) {
        this.txtCapacity.sendKeys(capacity);
    }
    setSpED(sped) {
        this.txtSpED.sendKeys(sped);
    }
    setStartTime() {
        this.btnStartTime.click();
    }
}
exports.VehicleRouteAssignmentPage = VehicleRouteAssignmentPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVoaWNsZVJvdXRlQXNzaWdubWVudFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWdlb2JqZWN0cy90ZWxlbWF0aWNzL2RhdGFtYW5hZ2VtZW50L3ZlaGljbGVyb3V0ZWFzc2lnbm1lbnQvVmVoaWNsZVJvdXRlQXNzaWdubWVudFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQStEO0FBQy9ELDhEQUEyRDtBQUUzRCxNQUFhLDBCQUEwQjtJQVlyQztRQUVFLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwRkFBMEYsQ0FBQyxDQUFDLENBQUM7UUFDbEksSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0ZBQXNGLENBQUMsQ0FBQyxDQUFDO0lBQ2hJLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBUTtRQUVsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsSUFBSSxNQUFNLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQU07UUFFZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQVE7UUFFbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFJO1FBRVYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFlBQVk7UUFFVixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FFRjtBQXRERCxnRUFzREMifQ==