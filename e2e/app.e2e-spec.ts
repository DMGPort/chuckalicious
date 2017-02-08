import { ChuckGamesPage } from './app.po';

describe('chuck-games App', function() {
  let page: ChuckGamesPage;

  beforeEach(() => {
    page = new ChuckGamesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
