import { ProjectTESTPage } from './app.po';

describe('project-test App', function() {
  let page: ProjectTESTPage;

  beforeEach(() => {
    page = new ProjectTESTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
