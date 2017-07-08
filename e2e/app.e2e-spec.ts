import { Angular2MaxProjectPage } from './app.po';

describe('angular2-max-project App', () => {
  let page: Angular2MaxProjectPage;

  beforeEach(() => {
    page = new Angular2MaxProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
