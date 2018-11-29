"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require('chai').expect;
const login_page_1 = require("../pages/login.page");
describe('login form', () => {
    it('should allow access with correct creds', () => {
        login_page_1.default.open();
        login_page_1.default.username.setValue('tomsmith');
        login_page_1.default.password.setValue('SuperSecretPassword!');
        login_page_1.default.submit();
        expect(login_page_1.default.flash.getText()).to.contain('You logged into a secure area!');
    });
});
