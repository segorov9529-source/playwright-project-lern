import { BasePage } from "./BasePage"

export class MainPage extends BasePage{
    constructor(page){
        super(page)
        this.signUpButton= page.getByRole('link', { name: 'Sign up' });
        this.loginButton =  page.getByRole('link', { name: 'Login' });
        
   
    }
    async register(){
        await this.signUpButton.click()
    }
   async btnLogin (){
    await this.loginButton.click()
   }
   
}

