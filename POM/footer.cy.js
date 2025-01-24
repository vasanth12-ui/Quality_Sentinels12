class footer{
    validfooter(){
        cy.contains('Join our team').click();
        cy.contains('Terms & Conditions').click();
        cy.contains('We respect our Policy').click();
        cy.contains('Fee & Payments').click();   
        cy.contains('Returns & Refunds').click();  
        cy.contains('Promotion Tem & conditions').click();  
        cy.contains('Track your order').click();  
        cy.contains('Frequntly asked questions').click();  
        cy.contains('Returns').click();  
        cy.contains('Cancilation').click();
        cy.contains('Payments').click();  
        cy.contains('Customer Care').click();  
        cy.contains('How do i Reedeem My coopoon').click();  
        cy.contains('Men').click();  
        cy.contains('Women').click(); 
        cy.contains('Press').click();
        cy.contains('Kids').click();
    }
}export default footer;