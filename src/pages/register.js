import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
    constructor (page) {
        super(page)
        this.userNameFill = page.getByRole('textbox', { name: 'Your Name' });
        this.userEmailFill = page.getByRole('textbox', { name: 'Email' });
        this.userPasswordFill= page.getByRole('textbox', { name: 'Password' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    }
    async register (userName,userEmail,userPassword){
        await this.userNameFill.click();
        await this.userNameFill.fill(userName)
        await this.userEmailFill.click();
        await this.userEmailFill.fill(userEmail);
        await this.userPasswordFill.click();
        await this.userPasswordFill.fill(userPassword)
        await this.signUpButton.click()
    }
 
}
