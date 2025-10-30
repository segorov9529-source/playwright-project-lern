import { test, expect } from '@playwright/test';
import { MainPage,ProfilePage,UserMainPage,RegistrationPage,App } from '../src/pages/index';
import { Builder } from '../src/buider/builder/index';

const url = 'https://realworld.qa.guru/';
let builder;
let app;
test.describe('Профиль пользователя',() =>{
test.beforeEach ( async ({ page },testInfo) => {
  builder =new Builder
  builder.addUserName().addUserEmail().addUserPassword().addAboutMySelf().generate() //Генерация кред и создание данных в сущность 
  app = new App(page); //
await app.mainPage.open(url);
await app.mainPage.register();
await app.registrationPage.register(builder.userName,builder.userEmail,builder.userPassword)
  console.log(builder.userEmail,builder.userPassword,builder.userName)
});
test ('Пользователь может изменить bio',async({page},testInfo)=>{
await app.userMainPage.personSettingsPage()
await app.profilePage.pfofileBiografia(builder.aboutMySelf);
await expect (app.profilePage.Biografia).toContainText(builder.aboutMySelf) // Проверяем что биография ,после нж. сохранения отображена на форме 
})

/* todo Проверка авторизации нужна в другом тесте */
// test('Проверить что пользователь может авторизоваться под созданной записью', async({page})=>{
// const email = userCredantils.email
// const password = userCredantils.password
// const name =userCredantils.name
// const mainPage= new MainPage(page);
// const author = new Authorization(page);
// const userMainPage =new UserMainPage(page)
// await mainPage.btnLogin();
// await author.userLogin(email,password);
// await expect (page.getByText(name)).toBeVisible(name);// Проверяем что в профиле првильное имя 
// })

})