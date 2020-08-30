import { Given, When, Then } from "cucumber";
import { LoginPage } from "../pageobjects/LoginPage";
import { LoadingGear } from "../common/LoadingGear";
import { browser } from "protractor";
import chai from "chai";
import { HomePage } from "../pageobjects/HomePage";
var chaiexpect = chai.expect;
let login = new LoginPage();
let homepage = new HomePage();
let loadinggear = new LoadingGear();

         Given('Navigate and login Athena with username: {string}, password: {string}, and {string} data area', async function (string, string2, string3) {
          await browser.get('https://athena-demo.karrostech.io/#/app/login');
          await login.txt_UserName.clear();
          await login.txt_UserName.sendKeys(string);
          await browser.sleep(1000);
          await login.txt_Password.clear();
          await login.txt_Password.sendKeys(string2);
          await browser.sleep(1000);
          await login.btn_Login.click();
          if (expect(login.ddl_SelectDataArea.isPresent()).toBe(true))
          {
            await login.ddl_SelectDataArea.sendKeys(string3);
            await login.btn_SaveDataArea.click();
          }
         });

         When('Click on a feature {string}', async function (string) {
          await loadinggear.waitUntilLoadingGearDisappear(10000)
          switch(string) { 
            case "Routing Management": { 
               await homepage.link_RoutingManagement.click();
               break; 
            } 
            case "Student Ridership": { 
              await homepage.link_StudentRidership.click();
               break; 
            }
            case "Dispatch": { 
              await homepage.link_Dispatch.click();
               break; 
            }
            case "Time & Attendance": { 
              await homepage.link_TimeAttendance.click();
               break; 
            }
            case "Telematics": { 
              await homepage.link_Telematics.click();
               break; 
            }
            case "IVIN": { 
              await homepage.link_IVIN.click();
               break; 
            }
            case "Mapping": { 
              await homepage.link_Mapping.click();
               break; 
            }
            case "Analytics": { 
              await homepage.link_Analytics.click();
               break; 
            }
            case "System Settings": { 
              await homepage.link_SystemSettings.click();
               break; 
            }
            default: { 
               break; 
            } 
         } 
         });

         Then('Should navigate successfully to {string}', async function (string) {
          await loadinggear.waitUntilLoadingGearDisappear(10000)
          await browser.getCurrentUrl().then(function(text){
          chaiexpect(text).to.equal(string);
          });
         });