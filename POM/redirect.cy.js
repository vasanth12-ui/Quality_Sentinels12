class RedirectPage {
    
    getRedirectButton() {
      cy.title().should('eq','Home - StyleMate');
      
      cy.get('li:nth-child(1)').click(); 
      cy.get('a[href="/category/men"]').should('have.text',"MenSHOP NOW")  
      cy.get('li:nth-child(3)').click(); 
      cy.go('back');
      cy.go('forward');
      cy.get('li:nth-child(3)').click();
     
     

    }
  }
  
  export default RedirectPage;