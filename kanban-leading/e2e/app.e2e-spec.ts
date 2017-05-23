import { KanbanLeadingPage } from './app.po';

describe('kanban-leading App', () => {
  let page: KanbanLeadingPage;

  beforeEach(() => {
    page = new KanbanLeadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
