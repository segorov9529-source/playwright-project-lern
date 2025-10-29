import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {
    constructor(page){
        super(page)
this.Biografia =page.getByPlaceholder('Short bio about you')
this.buttonUpdateSettings = page.getByRole('button',{name:'Update Settings'})
    }
      async pfofileBiografia (aboutMySelf){
        await this.Biografia.click();
        await this.Biografia.fill(aboutMySelf)
        await this.buttonUpdateSettings.click()
    }

}
  
