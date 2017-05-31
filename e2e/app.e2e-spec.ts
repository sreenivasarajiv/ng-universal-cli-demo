import { NgTempPage } from './app.po';

describe('ng-temp App', () => {
  let page: NgTempPage;

  beforeEach(() => {
    page = new NgTempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
