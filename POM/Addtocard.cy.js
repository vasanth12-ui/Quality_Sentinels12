class AddToCart {
  product() {
  
    cy.get('body > div:nth-child(2) > div:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)').should('be.visible').click();
    
    cy.get('a[href="/item/women/630c0cf3cacae4f0ab3bd5b4"]').should('be.visible').click();
  
    cy.get('.product__price__detail').should('be.visible').contains('1610');
    
  
    cy.get('div[class="add__cart"] button[type="button"]').should('be.visible').click();
    
  
    cy.get('.control__bar__container').should('be.visible').click();
   cy.xpath('(//span[contains(@class,"MuiBadge-root BaseBadge-root css-1rzb3uu")])[2]').should('be.visible').click()
  
  
    cy.get('div[class="checkout"] button[type="button"]').click();
    
    
  }
}

export default AddToCart;
