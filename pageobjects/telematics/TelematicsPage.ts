import {ElementFinder, element, by, browser} from 'protractor';

export class TelematicsPage
{
  lnkVehicleRouteAssignment: ElementFinder;

  constructor()
  {
    this.lnkVehicleRouteAssignment = element(by.xpath('//a[text() = " Vehicle-Route Assignment"]'));
  }

  navigateVehicleRouteAssignment()
  {
    browser.sleep(2000);
    this.lnkVehicleRouteAssignment.click();
  }
}