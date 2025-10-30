import { BasePage } from "./BasePage";

export class UserMainPage extends BasePage {
    constructor(page){
        super(page)
this.profileDropdown = page.locator('.dropdown-toggle')
this.buttonSettings = page.getByRole('link',{name: 'Settings'})
 this.buttonProfile = page.getByRole('link', { name: 'Profile' });

    }
    async personSettingsPage (){
        await this.profileDropdown.click();
        await this.buttonSettings.click()
    }
    async personProfilePage (){
         await this.profileDropdown.click();
         await this.buttonProfile.click()
    }
   
    
}
    
// await expect(page.getByText(name)).toBeVisible(name);