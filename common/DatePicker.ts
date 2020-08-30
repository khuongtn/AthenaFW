import {ElementFinder, element, by} from 'protractor';

export class DatePicker{

    ddlYear: ElementFinder;
    ddlMonth: ElementFinder;

    constructor()
    {      
        this.ddlYear = element(by.css('select[title = "Select year"]'));
        this.ddlMonth = element(by.css('select[title = "Select month"]'));
    }

    selectDate(dateVal){
        let date = new Date(dateVal);
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'short' });
        let monthFull = date.toLocaleString('default', { month: 'long' });
	    let monthNum = date.toLocaleString('default', { month: 'numeric' });
        let year = date.getFullYear().toString();

        this.ddlYear.sendKeys(year);
        this.ddlMonth.sendKeys(month);
        element(by.xpath('//div[@aria-label = "'+ day +'-'+ monthNum +'-'+ year +'"]')).click();
    }
};