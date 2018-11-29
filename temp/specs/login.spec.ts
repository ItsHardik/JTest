var expect = require('chai').expect
import LoginPage from '../pages/login.page'


describe('login form', () => {
    it('should allow access with correct creds', () => {
        LoginPage.open();
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.submit();
        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');

    });
});