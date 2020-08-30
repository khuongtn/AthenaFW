import {ElementFinder, element, by, browser} from 'protractor';
import { DatePicker } from '../../../../common/DatePicker';

export class VehicleRouteAssignmentPage
{
  chbFrequency: ElementFinder;
  txtFromDate: ElementFinder;
  btnCalendarFromDate: ElementFinder;
  txtToDate: ElementFinder;
  btnCalendarToDate: ElementFinder;
  txtCapacity: ElementFinder;
  txtSpED: ElementFinder;
  txtStartTime: ElementFinder;
  btnStartTime: ElementFinder;

  constructor()
  {
    this.chbFrequency = element(by.xpath('//a[text() = " Vehicle-Route Assignment"]'));
    this.txtFromDate = element(by.xpath("//input[@name = 'fromDate']"));
    this.btnCalendarFromDate = element(by.xpath("//input[@placeholder = 'fromDate']//following-sibling::button"));
    this.txtToDate = element(by.xpath("//input[@name = 'toDate']"));
    this.btnCalendarToDate = element(by.xpath("//input[@placeholder = 'toDate']//following-sibling::button"));
    this.txtCapacity = element(by.name('capacity'));
    this.txtSpED = element(by.name('spEd'));
    this.txtStartTime = element(by.xpath('//label[text() = "Start Time "]//following-sibling::div/div[@class = "inputPrettyTimes"]'));
    this.btnStartTime = element(by.xpath('//label[text() = "Start Time "]//following-sibling::div/i[@id = "timePickerContent"]'));
  }

  setFromDate(fromdate)
  {
    this.btnCalendarFromDate.click();
    let datepk = new DatePicker();
    datepk.selectDate(fromdate);
  }

  setToDate(todate)
  {
    this.btnCalendarToDate.click();
    let datepk = new DatePicker();
    datepk.selectDate(todate);
  }

  setCapacity(capacity)
  {
    this.txtCapacity.sendKeys(capacity);
  }

  setSpED(sped)
  {
    this.txtSpED.sendKeys(sped);
  }

  setStartTime()
  {
    this.btnStartTime.click();
  }

}