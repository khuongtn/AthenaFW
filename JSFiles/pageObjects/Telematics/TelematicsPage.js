"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelematicsPage = void 0;
const protractor_1 = require("protractor");
class TelematicsPage {
    constructor() {
        this.lnkVehicleRouteAssignment = protractor_1.element(protractor_1.by.xpath('//a[text() = " Vehicle-Route Assignment"]'));
    }
    navigateVehicleRouteAssignment() {
        protractor_1.browser.sleep(2000);
        this.lnkVehicleRouteAssignment.click();
    }
}
exports.TelematicsPage = TelematicsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVsZW1hdGljc1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlb2JqZWN0cy90ZWxlbWF0aWNzL1RlbGVtYXRpY3NQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUErRDtBQUUvRCxNQUFhLGNBQWM7SUFJekI7UUFFRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsOEJBQThCO1FBRTVCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7QUFkRCx3Q0FjQyJ9