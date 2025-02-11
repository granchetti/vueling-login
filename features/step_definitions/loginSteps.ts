import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import Login from "../../src/pages/login";

const login = new Login();

Given("the user is on the Vueling login page", function () {
  login.navigateToPage();
});

When(
  "the user enters username {string} and password {string}",
  function (username: string, password: string) {
    login.enterCredentials(username, password);
  }
);

Then("the login should be {string}", function (result: string) {
  if (result === "successful") {
    expect(login.isRedirectedToHomePage()).to.be.true;
  } else if (result === "unsuccessful") {
    expect(login.isErrorMessageDisplayed()).to.be.true;
  }
});
