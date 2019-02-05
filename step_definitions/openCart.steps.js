const assert = require('assert');

module.exports = function () {
    this.Given(/^I launch the OpenCart application$/, function () {
        return driver.url('https://www.opencart.com/');	
    });
    this.Then(/^I verify the "([^"]*)" title on the page$/, function (keywords) {
		let title = driver.getTitle();
        return assert.equal(keywords, title);
    });
    this.When(/^I click on login$/, function () {
        return driver.findElement(By.className("btn btn-link navbar-btn")).click();
    });
    this.When(/^I enter email$/, function () {
        return driver.findElement(By.id("input-email")).sendKeys('opencart@gmail.com');
    });
    this.When(/^I enter password$/, function () {
        return driver.findElement(By.id("input-password")).sendKeys('password');
    });
    this.When(/^I click on login button$/, function () {
        return driver.findElement(By.className("btn btn-primary btn-lg hidden-xs")).click();
    });
    this.Then(/^I verify the error message$/, function () {
        return driver.wait(until.elementsLocated(By.className("alert alert-danger")), 10000);
    });
}