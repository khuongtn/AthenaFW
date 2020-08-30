import {browser, Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        'args': ['incognito']
    }
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    //specs: 
    suites: {
      Login: ['../features/Login.feature'],
      Home: ['../features/Home.feature'],
    },

    cucumberOpts: {
      format:'json:./cucumberreport.json',
      require: ['./stepDefinations/*.js'],  // require step definition files before executing features
    },

    onPrepare: () => {
      browser.manage().timeouts().pageLoadTimeout(40000);
      browser.manage().timeouts().implicitlyWait(30000);
      browser.waitForAngularEnabled(false);
      browser.manage().window().maximize();
    },

    onComplete: () =>{
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './Reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
          "App Version":"1.16.0",
          "Test Environment": "Demo",
          "Browser": "Chrome  85",
          "Platform": "MacOS",
          "Parallel": "Scenarios",
          "Executed": "Remote"
          }
        };
      reporter.generate(options);
    }
  };