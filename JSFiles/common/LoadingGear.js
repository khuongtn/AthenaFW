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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingGear = void 0;
const protractor_1 = require("protractor");
class LoadingGear {
    constructor() {
        this.loadinggear = protractor_1.element(protractor_1.by.css('div[class = "loadingCover"]'));
    }
    waitUntilLoadingGearDisappear(time_out) {
        return __awaiter(this, void 0, void 0, function* () {
            let waitingtime = 1000;
            console.log("wait loading gear!");
            do {
                protractor_1.browser.sleep(1000);
                waitingtime = waitingtime + 1000;
            } while (expect(this.loadinggear.isPresent()).toBe(true) && waitingtime <= time_out);
        });
    }
}
exports.LoadingGear = LoadingGear;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZ0dlYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tb24vTG9hZGluZ0dlYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQStEO0FBRS9ELE1BQWEsV0FBVztJQUlwQjtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUssNkJBQTZCLENBQUMsUUFBUTs7WUFFeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUNqQyxHQUNBO2dCQUNJLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixXQUFXLEdBQUcsV0FBVyxHQUFDLElBQUksQ0FBQzthQUNsQyxRQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxRQUFRLEVBQUM7UUFDdkYsQ0FBQztLQUFBO0NBQ0o7QUFuQkQsa0NBbUJDO0FBQUEsQ0FBQyJ9