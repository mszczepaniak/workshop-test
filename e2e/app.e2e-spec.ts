import { WestieMatesPage } from './app.po';

describe('westie-mates App', () => {
  let page: WestieMatesPage;

  beforeEach(() => {
    page = new WestieMatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
