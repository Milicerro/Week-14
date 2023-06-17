import logIn from "../pageobjects/logIn.js";
import homePage from "../pageobjects/homePage.js";

describe ("Login the correct user.", () => {
    beforeAll("Open browser", () =>{
        browser.setWindowSize (1920, 1080);
        browser.url("https://www.saucedemo.com");
    });

    it ("Verify login landin page.", async () => {
        await expect(logIn.loginLogo).toBeDisplayed()
    });

    it ("Successfuly login process.", async () => {
        await expect(logIn.userNameInput).toBeDisplayed();
        await logIn.login("standard_user", "secret_sauce");
        await logIn.btnLoginClick();
    });

    it ("Verify user welcome page.", async () => {
        await expect(homePage.welcomePage).toBeDisplayed();
        await expect(homePage.welcomePage).toHaveTextContaining("Products");
        await expect(homePage.correctImage).toBeDisplayed();
    });
});

describe ("Login the locked out user.", () => {
    beforeAll("Open browser", () =>{
        browser.setWindowSize (1920, 1080);
        browser.url("https://www.saucedemo.com");
    });

    it ("Verify login landin page.", async () => {
        await expect(logIn.loginLogo).toBeDisplayed()
    });

    it ("Locked out login process.", async () => {
        await expect(logIn.userNameInput).toBeDisplayed();
        await logIn.login("locked_out_user", "secret_sauce");
        await logIn.btnLoginClick();
    });

    it ("Verify message.", async () => {
        await expect(logIn.errorMessage).toBeDisplayed();
        await expect(logIn.errorMessage).toHaveTextContaining("Epic sadface: Sorry, this user has been locked out.");
    });
});

describe ("Login the problem user.", () => {
    beforeAll("Open browser", () =>{
        browser.setWindowSize (1920, 1080);
        browser.url("https://www.saucedemo.com");
    });

    it ("Verify login landin page.", async () => {
        await expect(logIn.loginLogo).toBeDisplayed()
    });

    it ("Verify login process.", async () => {
        await expect(logIn.userNameInput).toBeDisplayed();
        await logIn.login("problem_user", "secret_sauce");
        await logIn.btnLoginClick();
    });

    it ("Verify user welcome page.", async () => {
        await expect(homePage.wrongImage).toBeDisplayed();
      });
});

describe ("Login the slow user.", () => {
    beforeAll("Open browser", () =>{
        browser.setWindowSize (1920, 1080);
        browser.url("https://www.saucedemo.com");
    });

    it ("Verify login landing page.", async () => {
        await expect(logIn.loginLogo).toBeDisplayed()
    });

    it ("Slow login process.", async () => {
        await expect(logIn.userNameInput).toBeDisplayed();
        const startTime = Date.now();

        await logIn.login("performance_glitch_user", "secret_sauce");
        await logIn.btnLoginClick();

        const endTime = Date.now();
        const executionTime = endTime - startTime;
        console.log(`Login execution time: ${executionTime} ms`);

        await expect(homePage.wrongImage).toBeDisplayed();
        await expect(executionTime).toBeLessThan(2000);
    });
});