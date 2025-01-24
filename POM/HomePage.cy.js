class HomepageNavigation{
   validateHomepage(){
      cy.get('li:nth-child(1) a:nth-child(1)').click();
      cy.title().should('eq','Home - StyleMate')
   }
}export default HomepageNavigation;