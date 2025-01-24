class contentValidation{
    Homepage(){
        cy.get('h1.landing__header__main').should('have.text','Checkout The Best Fashion Style');
    }
    mens(){
        cy.get('h3.landing__header__discount').should('have.text','UP TO 15% DISCOUNT')
    }
   
}export default contentValidation;