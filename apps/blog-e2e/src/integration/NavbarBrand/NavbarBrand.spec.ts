describe('blog: NavbarBrand component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navbarbrand--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to NavbarBrand!');
    });
});
