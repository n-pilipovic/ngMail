import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MailClientAppComponent } from '../app/mail-client.component';

beforeEachProviders(() => [MailClientAppComponent]);

describe('App: MailClient', () => {
  it('should create the app',
      inject([MailClientAppComponent], (app: MailClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'mail-client works!\'',
      inject([MailClientAppComponent], (app: MailClientAppComponent) => {
    expect(app.title).toEqual('mail-client works!');
  }));
});
