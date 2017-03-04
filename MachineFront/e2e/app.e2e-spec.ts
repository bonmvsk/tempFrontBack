import { MachineFrontPage } from './app.po';

describe('machine-front App', () => {
  let page: MachineFrontPage;

  beforeEach(() => {
    page = new MachineFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
