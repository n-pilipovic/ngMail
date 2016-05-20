export class MailClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mail-client-app h1')).getText();
  }
}
