import {ElementFinder, element, by, browser} from 'protractor';

export class LoadingGear{

    loadinggear: ElementFinder;

    constructor()
    {      
        this.loadinggear = element(by.css('div[class = "loadingCover"]'));
    }

    async waitUntilLoadingGearDisappear(time_out)
    {
        let waitingtime = 1000;
        console.log("wait loading gear!")
        do
        {
            browser.sleep(1000);
            waitingtime = waitingtime+1000;
        }while (expect(this.loadinggear.isPresent()).toBe(true) && waitingtime <= time_out)
    }
};