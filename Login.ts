import {browser, element, by} from 'protractor';
import { LoginPage } from './pageobjects/LoginPage';
import { HomePage } from './pageobjects/HomePage';
import { TelematicsPage } from './pageobjects/telematics/TelematicsPage';
import { VehicleRouteAssignmentPage } from './pageobjects/telematics/datamanagement/vehiclerouteassignment/VehicleRouteAssignmentPage';

let login = new LoginPage();
let homepage = new HomePage();
let telematicspage = new TelematicsPage();
let vehiclerouteassignment = new VehicleRouteAssignmentPage();


describe('angularjs homepage', ()=> {
    it('Log in', function() {

    browser.get('https://athena-demo.karrostech.io/#/app/login');

    //login.login("jpomije@gmail.com","test2","plan")    
    //homepage.navigateTelematics();
    telematicspage.navigateVehicleRouteAssignment();

    browser.sleep(10000);
    vehiclerouteassignment.setFromDate("08/22/2020");
    vehiclerouteassignment.setToDate("08/30/2020");
    vehiclerouteassignment.setCapacity("90");
    vehiclerouteassignment.setStartTime();

    /*
      //browser.ignoreSynchronization = true;
      browser.get('https://athena-demo.karrostech.io/#/app/login');
      
      element(by.name("username")).sendKeys("jpomije@gmail.com");
      element(by.name("password")).sendKeys("test2");
      element(by.css('button[class = "btn btn-primary btn-sm fw-thin loginBtn"]')).click();
      
      element.all(by.css('option')).first().click();
      element(by.css('button[class="btn btn-success btn-tiny pull-right"]')).click();
    
      
      element(by.css('img[title="Mapping"]')).click();
  
      element(by.xpath('//a[text() = " Management"]')).getText().then(function(text)
      {
      console.log(text);
      })
      element(by.xpath('//a[text() = " Point Location Management"]')).click();
      */

      browser.sleep(10000);
    });
  });