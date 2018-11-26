var expect = require('chai').expect
import LoginPage from '../pages/login.page'
import reporter from 'wdio-allure-reporter'

describe('login form', () => {
    it('should deny access with wrong creds', () => {

        LoginPage.open();
        LoginPage.username.setValue('foo');
        browser.debug();
        LoginPage.password.setValue('bar');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');
    });
    it('should allow access with correct creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');
    });
});