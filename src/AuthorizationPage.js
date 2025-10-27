import { BasePage } from "./BasePage"

export class Authorization extends BasePage{
    constructor(page){
        super(page);
this.inputEmail = page.getByRole('textbox', { name: 'Email' });
this.inputPassword = page.getByRole('textbox', { name: 'Password' });
this.buttonLogin = page.getByRole('button', { name: 'Login' })
    }
    async userLogin (email,password) {
await this.inputEmail.click();
await this.inputEmail.fill(email)
await this.inputPassword.click();
await this.inputPassword.fill(password);
await this.buttonLogin.click()
    }
}
