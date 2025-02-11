export default class Login {
  navigateToPage(): void {
    console.log("Executing navigateToPage");
  }

  enterCredentials(username: string, password: string): void {
    console.log(
      `Executing enterCredentials with Username: ${username} and Password: ${password}`
    );
  }

  isRedirectedToHomePage(): boolean {
    console.log("Executing isRedirectedToHomePage");
    return true;
  }

  isErrorMessageDisplayed(): boolean {
    console.log("Executing isErrorMessageDisplayed");
    return true;
  }
}
