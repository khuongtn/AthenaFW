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
var expect = chai_1.default.expect;
let login = new LoginPage_1.LoginPage();
let loadinggear = new LoadingGear_1.LoadingGear();
cucumber_1.Given('Navigate Athena website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://athena-demo.karrostech.io/#/app/login');
}));
cucumber_1.When('Input username: {string}, password: {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.txt_UserName.clear();
    yield login.txt_UserName.sendKeys(string);
    yield protractor_1.browser.sleep(1000);
    yield login.txt_Password.clear();
    yield login.txt_Password.sendKeys(string2);
    yield protractor_1.browser.sleep(1000);
}));
cucumber_1.When('Click login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.btn_Login.click();
    loadinggear.waitUntilLoadingGearDisappear(10000);
}));
cucumber_1.When('Select {string} area', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.ddl_SelectDataArea.sendKeys(string);
}));
cucumber_1.When('Click Save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield login.btn_SaveDataArea.click();
    });
});
cucumber_1.Then('Should log in successfully to {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    loadinggear.waitUntilLoadingGearDisappear(10000);
    //await browser.sleep(10000);
    yield protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text).to.equal(string);
    });
}));
cucumber_1.Then('Should log in unsuccessfully with alert {string} and stay at {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    loadinggear.waitUntilLoadingGearDisappear(10000);
    //await browser.sleep(3000);
    yield login.dialog_aler.getText().then(function (text) {
        expect(text).to.equal(string);
    });
    yield protractor_1.browser.getCurrentUrl().then(function (text) {
        expect(text).to.equal(string2);
    });
    yield protractor_1.browser.sleep(10000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5UZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL0xvZ2luVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3Qyx3REFBcUQ7QUFDckQsdURBQW9EO0FBQ3BELDJDQUFxQztBQUNyQyxnREFBd0I7QUFDeEIsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM1QixJQUFJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUVsQyxnQkFBSyxDQUFDLHlCQUF5QixFQUFFLEdBQVEsRUFBRTtJQUN6QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDckUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4Q0FBOEMsRUFBRSxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUMzRSxNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLE1BQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxNQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxvQkFBb0IsRUFBRSxHQUFPLEVBQUU7SUFDbEMsTUFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNsRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDMUMsTUFBTSxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsWUFBWSxFQUFFOztRQUNqQixNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDNUQsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hELDZCQUE2QjtJQUM3QixNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUVBQXVFLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDcEcsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hELDRCQUE0QjtJQUM1QixNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=