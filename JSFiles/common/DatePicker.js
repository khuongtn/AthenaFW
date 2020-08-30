"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePicker = void 0;
const protractor_1 = require("protractor");
class DatePicker {
    constructor() {
        this.ddlYear = protractor_1.element(protractor_1.by.css('select[title = "Select year"]'));
        this.ddlMonth = protractor_1.element(protractor_1.by.css('select[title = "Select month"]'));
    }
    selectDate(dateVal) {
        let date = new Date(dateVal);
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'short' });
        let monthFull = date.toLocaleString('default', { month: 'long' });
        let monthNum = date.toLocaleString('default', { month: 'numeric' });
        let year = date.getFullYear().toString();
        this.ddlYear.sendKeys(year);
        this.ddlMonth.sendKeys(month);
        protractor_1.element(protractor_1.by.xpath('//div[@aria-label = "' + day + '-' + monthNum + '-' + year + '"]')).click();
    }
}
exports.DatePicker = DatePicker;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi9EYXRlUGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLFVBQVU7SUFLbkI7UUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBTztRQUNkLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFFLEdBQUcsR0FBRSxHQUFHLEdBQUUsUUFBUSxHQUFFLEdBQUcsR0FBRSxJQUFJLEdBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1RixDQUFDO0NBQ0o7QUF2QkQsZ0NBdUJDO0FBQUEsQ0FBQyJ9