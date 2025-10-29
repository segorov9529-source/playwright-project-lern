import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/MainPage';
import { RegistrationPage } from '../src/register';
import { UserMainPage } from '../src/UserMainPage';
import { ProfilePage } from '../src/ProfilePage';
import { Authorization } from '../src/AuthorizationPage';
import { Builder } from '../src/buider/builder/creditailsPage';

const url = 'https://realworld.qa.guru/';
let builder
test.describe('Профиль пользователя',() =>{
test.beforeEach ( async ({ page },testInfo) => {
  
  // Генрация для регистрации данных
  //   const userEmail = faker.internet.email()
  // const userPassword = faker.internet.password({length: 5})
  // const userName = faker.person.firstName('male')
  builder =new Builder
  builder.addUserName().addUserEmail().addUserPassword().addAboutMySelf().generate()
const mainPage =new MainPage(page)
await mainPage.open(url);
await mainPage.register();
const registrationPage = new RegistrationPage(page);
await registrationPage.register(builder.userName,builder.userEmail,builder.userPassword)
  console.log(builder.userEmail,builder.userPassword,builder.userName)

});

test ('Пользователь может изменить bio',async({page},testInfo)=>{

const userMainPage = new UserMainPage(page)
await userMainPage.personSettingsPage()
const profilePage = new ProfilePage(page)
await profilePage.pfofileBiografia(builder.aboutMySelf);
await expect (profilePage.Biografia).toContainText(builder.aboutMySelf) // Проверяем что биография ,после нж. сохранения отображена на форме 
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