"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const LoginPage_1 = require("../pageobjects/LoginPage");
const LoadingGear_1 = require("../common/LoadingGear");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const HomePage_1 = require("../pageobjects/HomePage");
var chaiexpect = chai_1.default.expect;
let login = new LoginPage_1.LoginPage();
let homepage = new HomePage_1.HomePage();
let loadinggear = new LoadingGear_1.LoadingGear();
cucumber_1.Given('Navigate and login Athena with username: {string}, password: {string}, and {string} data area', function (string, string2, string3) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://athena-demo.karrostech.io/#/app/login');
        yield login.txt_UserName.clear();
        yield login.txt_UserName.sendKeys(string);
        yield protractor_1.browser.sleep(1000);
        yield login.txt_Password.clear();
        yield login.txt_Password.sendKeys(string2);
        yield protractor_1.browser.sleep(1000);
        yield login.btn_Login.click();
        if (expect(login.ddl_SelectDataArea.isPresent()).toBe(true)) {
            yield login.ddl_SelectDataArea.sendKeys(string3);
            yield login.btn_SaveDataArea.click();
        }
    });
});
cucumber_1.When('Click on a feature {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadinggear.waitUntilLoadingGearDisappear(10000);
        switch (string) {
            case "Routing Management": {
                yield homepage.link_RoutingManagement.click();
                break;
            }
            case "Student Ridership": {
                yield homepage.link_StudentRidership.click();
                break;
            }
            case "Dispatch": {
                yield homepage.link_Dispatch.click();
                break;
            }
            case "Time & Attendance": {
                yield homepage.link_TimeAttendance.click();
                break;
            }
            case "Telematics": {
                yield homepage.link_Telematics.click();
                break;
            }
            case "IVIN": {
                yield homepage.link_IVIN.click();
                break;
            }
            case "Mapping": {
                yield homepage.link_Mapping.click();
                break;
            }
            case "Analytics": {
                yield homepage.link_Analytics.click();
                break;
            }
            case "System Settings": {
                yield homepage.link_SystemSettings.click();
                break;
            }
            default: {
                break;
            }
        }
    });
});
cucumber_1.Then('Should navigate successfully to {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadinggear.waitUntilLoadingGearDisappear(10000);
        yield protractor_1.browser.getCurrentUrl().then(function (text) {
            chaiexpect(text).to.equal(string);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvSG9tZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msd0RBQXFEO0FBQ3JELHVEQUFvRDtBQUNwRCwyQ0FBcUM7QUFDckMsZ0RBQXdCO0FBQ3hCLHNEQUFtRDtBQUNuRCxJQUFJLFVBQVUsR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQzVCLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQzlCLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRTNCLGdCQUFLLENBQUMsK0ZBQStGLEVBQUUsVUFBZ0IsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPOztRQUM5SSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQzNEO1lBQ0UsTUFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0lBQ0YsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2QkFBNkIsRUFBRSxVQUFnQixNQUFNOztRQUN6RCxNQUFNLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN0RCxRQUFPLE1BQU0sRUFBRTtZQUNiLEtBQUssb0JBQW9CLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxRQUFRLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzlDLE1BQU07YUFDUjtZQUNELEtBQUssbUJBQW1CLENBQUMsQ0FBQztnQkFDeEIsTUFBTSxRQUFRLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVDLE1BQU07YUFDUjtZQUNELEtBQUssVUFBVSxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQyxNQUFNO2FBQ1I7WUFDRCxLQUFLLG1CQUFtQixDQUFDLENBQUM7Z0JBQ3hCLE1BQU0sUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxQyxNQUFNO2FBQ1I7WUFDRCxLQUFLLFlBQVksQ0FBQyxDQUFDO2dCQUNqQixNQUFNLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3RDLE1BQU07YUFDUjtZQUNELEtBQUssTUFBTSxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNoQyxNQUFNO2FBQ1I7WUFDRCxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkMsTUFBTTthQUNSO1lBQ0QsS0FBSyxXQUFXLENBQUMsQ0FBQztnQkFDaEIsTUFBTSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyQyxNQUFNO2FBQ1I7WUFDRCxLQUFLLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxQyxNQUFNO2FBQ1I7WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDTixNQUFNO2FBQ1I7U0FDSDtJQUNELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMENBQTBDLEVBQUUsVUFBZ0IsTUFBTTs7UUFDdEUsTUFBTSxXQUFXLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDaEQsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=