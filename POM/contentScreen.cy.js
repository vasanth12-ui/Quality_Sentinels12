class ContentPage {
   Mobilescreen(){
   cy.viewport('iphone-x');
}
   Tabscreen(){
      cy.viewport('ipad-2')
   }
Desktopscreen(){
   cy.viewport('macbook-16')
}
}

export default ContentPage;
