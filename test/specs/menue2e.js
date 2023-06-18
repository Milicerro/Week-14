import logIn from "../pageobjects/logIn.js";
import productsPage from "../pageobjects/productsPage.js";
import checkoutPage from "../pageobjects/checkoutPage.js";
import menuPage from "../pageobjects/menuPage.js";

describe("Accessing the webpage.", () => {
    beforeAll("Open browser", () =>{
        browser.setWindowSize (1920, 1080);
        browser.url("https://www.saucedemo.com");
    });

    it("Successfully login process.", async () => {
        await logIn.login("standard_user", "secret_sauce");
        await logIn.btnLoginClick();
    });
});

describe("Checking All Items page.", () => {
    it("Clicking on the All Items button should redirect to the inventory Page.", async () => {
        await browser.pause(3000);
        await menuPage.menuBtn.click();
        await browser.pause(2000);
        await expect(menuPage.sideBar).toBeDisplayed();
        await menuPage.logOutBtn.click();
    });
});