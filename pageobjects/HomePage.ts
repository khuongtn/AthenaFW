import {ElementFinder, element, by} from 'protractor';

export class HomePage
{
  link_Mapping: ElementFinder;
  link_Telematics: ElementFinder;
  link_RoutingManagement: ElementFinder;
  link_StudentRidership: ElementFinder;
  link_Dispatch: ElementFinder;
  link_TimeAttendance: ElementFinder;
  link_IVIN: ElementFinder;
  link_Analytics: ElementFinder;
  link_SystemSettings: ElementFinder;

  constructor()
  {
    this.link_Mapping = element(by.css('img[title="Mapping"]'));
    this.link_Telematics = element(by.css('img[title="Telematics"]'));
    this.link_RoutingManagement = element(by.css('img[title="Routing Management"]'));
    this.link_StudentRidership = element(by.css('img[title="Student Ridership"]'));
    this.link_Dispatch = element(by.css('img[title="Dispatch"]'));
    this.link_TimeAttendance = element(by.css('img[title="Time & Attendance"]'));
    this.link_IVIN = element(by.css('img[title="IVIN"]'));
    this.link_Analytics = element(by.css('img[title="Analytics"]'));
    this.link_SystemSettings = element(by.css('img[title="System Settings"]'));    
  }

  /*
  navigateMapping()
  {
   this.link_Mapping.click().then(function()
    {
    console.log("Go to Mapping");
    });
  }

  navigateTelematics()
  {
    this.link_Telematics.click().then(function()
    {
    console.log("Go to Telematics");
    });
  }
  */
}