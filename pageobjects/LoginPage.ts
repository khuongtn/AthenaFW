import {ElementFinder, element, by} from 'protractor';

export class LoginPage
{
  txt_UserName: ElementFinder;
  txt_Password: ElementFinder;
  btn_Login: ElementFinder;
  ddl_SelectDataArea: ElementFinder;
  btn_SaveDataArea: ElementFinder;
  dialog_aler: ElementFinder;
  
  constructor()
  {
    this.txt_UserName = element(by.name("username"));
    this.txt_Password = element(by.name("password"));
    this.btn_Login = element(by.css('button[class = "btn btn-primary btn-sm fw-thin loginBtn"]'));
    this.ddl_SelectDataArea = element(by.name("somethingSelect"));
    this.btn_SaveDataArea = element(by.css('button[class="btn btn-success btn-tiny pull-right"]'));
    this.dialog_aler = element(by.css('div[role="alertdialog"]'));
  }
  /*
  setUsername(username)
  {
    this.txtUserName.sendKeys(username);
  }

  setPassword(password)
  {
    this.txtPassword.sendKeys(password);
  }

  clickLogin()
  {
    this.btnLogin.click();
  }

  setSelectDataArea(dataarea)
  {
    this.ddlSelectDataArea.sendKeys(dataarea);
  }

  clickSaveDataArea()
  {
    this.btnSaveDataArea.click();
  }

  login(username, password, dataarea)
  {   
    this.setUsername(username);
    this.setPassword(password);
    this.clickLogin();
    this.setSelectDataArea(dataarea);
    this.clickSaveDataArea()
  }
  */
}