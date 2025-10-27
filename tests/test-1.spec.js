import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../src/MainPage';
import { RegistrationPage } from '../src/register';
import { UserMainPage } from '../src/UserMainPage';
import { ProfilePage } from '../src/ProfilePage';
import { Authorization } from '../src/AuthorizationPage';

const url = 'https://realworld.qa.guru/';
let userCredantils ={}
function getUserCredantils (){
  return userCredantils
}
test.describe('Профиль пользователя',() =>{
test.beforeEach ( async ({ page },testInfo) => {
  // Условие для теста если не нужна регистрация пользователя
  if (testInfo.title.includes('Profile')){
       console.log('Пропускаем регистрацию для:', testInfo.title);
            return; // ← Выходим из beforeEach без регистрации

  }
  // Генрация для регистрации данных
    const userEmail = faker.internet.email()
  const userPassword = faker.internet.password({length: 5})
  const userName = faker.person.firstName('male')
const mainPage =new MainPage(page)
await mainPage.open(url);
await mainPage.register();
const registrationPage = new RegistrationPage(page);
await registrationPage.register(userName,userEmail,userPassword)
  console.log(userEmail,userPassword,userName)
  userCredantils = {
    name: userName,
    email: userEmail,
    password:userPassword
}
});

test ('Пользователь может изменить bio',async({page},testInfo)=>{
  const userBiogr = faker.person.bio()
const userMainPage = new UserMainPage(page)
await userMainPage.personSettingsPage()
const profilePage = new ProfilePage(page)
await profilePage.pfofileBiografia(userBiogr);
await expect (profilePage.Biografia).toContainText(userBiogr) // Проверяем что биография ,после нж. сохранения отображена на форме 
})
test('Проверить что пользователь может авторизоваться под созданной записью', async({page})=>{
const email = userCredantils.email
const password = userCredantils.password
const name =userCredantils.name
const mainPage= new MainPage(page);
const author = new Authorization(page);
const userMainPage =new UserMainPage(page)
await mainPage.btnLogin();
await author.userLogin(email,password);
await expect (page.getByText(name)).toBeVisible(name);// Проверяем что в профиле првильное имя 
})

})