import { MailClientPage } from './app.po';

describe('mail-client App', function() {
  let page: MailClientPage;

  beforeEach(() => {
    page = new MailClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mail-client works!');
  });
});
