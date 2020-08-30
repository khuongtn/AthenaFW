import {browser, element, by} from 'protractor';

describe('angularjs homepage', function() {
    it('Log in', function() {
  
      browser.manage().timeouts().pageLoadTimeout(40000);
      browser.manage().timeouts().implicitlyWait(30000);
  
      browser.waitForAngularEnabled(false);
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
  
      browser.sleep(10000);
    });
  });