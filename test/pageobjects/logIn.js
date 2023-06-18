class logIn {

    get loginLogo() {
        return $("#root > div > div.login_logo");
    }

    get userNameInput() {
        return $("#user-name");
    }

    get passwordInput() {
        return $("#password");
    }

    get btnLogin() {
        return $("#login-button");
    }

    get passCredentials() {
        return $("#root > div > div.login_wrapper > div.login_credentials_wrap > div > div.login_password");
    }

    get loginCredentials() {
        return $("#login_credentials");
    }

    get errorMessage() {
        return $("#login_button_container > div > form > div.error-message-container.error > h3");
    }

    get errorInput() {
        return $("#login_button_container > div > form > div:nth-child(1) > svg > path");
    }

    get errorModal() {
        return $("#login_button_container > div > form > div.error-message-container.error > h3");
    }

    async login(userName, password) {
        await this.userNameInput.setValue(userName);
        await this.passwordInput.addValue(password);
    }

    async btnLoginClick() {
        await this.btnLogin.click();
    }
}

export default new logIn();