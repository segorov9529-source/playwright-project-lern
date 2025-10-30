import { MainPage } from "./MainPage";
import { RegistrationPage } from "./register";
import { UserMainPage } from "./UserMainPage";
import { ProfilePage } from "./ProfilePage";

export class App {
    constructor(page){
this.page=page
this.mainPage =new MainPage(page);
this.registrationPage = new RegistrationPage(page);
this.userMainPage = new UserMainPage(page);
this.profilePage = new ProfilePage(page)


    }
}
