import { MyTaskAppPage } from './app.po';

describe('my-task-app App', function() {
  let page: MyTaskAppPage;

  beforeEach(() => {
    page = new MyTaskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
