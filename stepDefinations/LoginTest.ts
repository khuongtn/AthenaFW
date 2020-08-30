import { Given, When, Then } from "cucumber";
import { LoginPage } from "../pageobjects/LoginPage";
import { LoadingGear } from "../common/LoadingGear";
import { browser } from "protractor";
import chai from "chai";
var expect = chai.expect;
let login = new LoginPage();
let loadinggear = new LoadingGear();

  Given('Navigate Athena website', async ()=> {
    await browser.get('https://athena-demo.karrostech.io/#/app/login');
  });

  When('Input username: {string}, password: {string}', async(string, string2)=> {
    await login.txt_UserName.clear();
    await login.txt_UserName.sendKeys(string);
    await browser.sleep(1000);
    await login.txt_Password.clear();
    await login.txt_Password.sendKeys(string2);
    await browser.sleep(1000);
  });

  When('Click login button', async()=> {
    await login.btn_Login.click();
    loadinggear.waitUntilLoadingGearDisappear(10000)    
  });

  When('Select {string} area', async(string)=> {
    await login.ddl_SelectDataArea.sendKeys(string);
  });

  When('Click Save', async function () {
    await login.btn_SaveDataArea.click();
  });

  Then('Should log in successfully to {string}', async(string)=> {
    loadinggear.waitUntilLoadingGearDisappear(10000)
    //await browser.sleep(10000);
    await browser.getCurrentUrl().then(function(text){
      expect(text).to.equal(string);
    });
  });

  Then('Should log in unsuccessfully with alert {string} and stay at {string}', async(string, string2)=> {
    loadinggear.waitUntilLoadingGearDisappear(10000)
    //await browser.sleep(3000);
    await login.dialog_aler.getText().then(function(text){
      expect(text).to.equal(string);
    });
    await browser.getCurrentUrl().then(function(text){
      expect(text).to.equal(string2);
    });
    await browser.sleep(10000);
  });