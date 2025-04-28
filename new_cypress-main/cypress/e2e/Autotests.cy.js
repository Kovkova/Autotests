import * as data from "../helpers/default_data.json"

describe('Тесты для сайта форма логина', function () {

    beforeEach('Начало', function () {
        cy.visit('/');
    });
    afterEach('Конец', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Верный логин и верный пароль', function () {         
         cy.get('#mail').type(data.login);
         cy.get('#pass').type(data.password);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');
              })
    
    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm > .header').contains('Восстановите пароль').should('be.visible');
        cy.get('#mailForgot').type('grofriheyoiffo-3250@mail.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible');
            })

    it('Верный логин и неверный пароль', function () {         
        cy.get('#mail').type(data.login);
        cy.get('#pass').type('654dfrfv3');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
        })

    it('Неравильный логин, правильный пароль', function () {
    cy.get('#mail').type('grofriheyoiffo-3250@mail.com');
         cy.get('#pass').type(data.password);
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
    })

    it('Логин без @', function () {         
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible');
             })

    it('Строчные буквы в логине', function () {         
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type(data.password);
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible');
                     })
 }) 
        