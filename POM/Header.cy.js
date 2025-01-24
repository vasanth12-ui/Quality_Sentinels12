class Headerpage{
    navigateheader(){
       cy.get('.header__container') 
    
    cy.get('.landing__header__discount').click();
    cy.get('.landing__header__main').click();  
    cy.xpath('(//button[@type="button"][normalize-space()="SHOP NOW"])[1]').click()
    }
}export default Headerpage;