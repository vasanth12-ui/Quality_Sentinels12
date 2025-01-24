import HomepageNavigation from "../../support/POM/HomePage.cy";
import RedirectPage from "../../support/POM/redirect.cy";
import Headerpage from "../../support/POM/Header.cy";
import AddToCart from "../../support/POM/Addtocard.cy"; 
import ContentPage from "../../support/POM/contentScreen.cy";
import contentValidation from "../../support/POM/contentvalidation.cy";
import footer from "../../support/POM/footer.cy";
import LoginPage from "../../support/POM/LOGIN.cy";  




describe('StyleMate ecommerce mate webstite', () => {
   
    const loginpage = new LoginPage();       
    
    beforeEach(() => {
        cy.visit('https://luni-interface-029.vercel.app/account/login');
    });
    it('', () => {
       
        const home1=new HomepageNavigation();
        home1.validateHomepage();
    });

    it('Validates successful login', () => {
        cy.get('.email__input').type('vasanthakumarg1212@gmail.com');
        cy.get('.password__input').type('password123'); 
        cy.get('.login__button').click(); 
    });
    
});

describe('', () => {
    beforeEach(() => {
        cy.visit('https://luni-interface-029.vercel.app/');
    });
   
    it('rederict to call back', () => {
       
        cy.wait(5000)
        const redirect1=new RedirectPage(); 
        redirect1.getRedirectButton();
    });
    it('Header', () => {
    
            const header1=new Headerpage();
            header1.navigateheader();
        });
        it('should add a product to the cart', () => {     
            const addToCart = new AddToCart(); 
            addToCart.product(); 
          });
          it('different Screen type to user', () => {
    
            const test1=new ContentPage();
            const test2=new ContentPage();
            const test3=new ContentPage();
            test1.Mobilescreen();
           test2.Tabscreen();
           test3.Desktopscreen();
        });
        it('condent validation in Stylemate', () => {
            cy.visit('https://luni-interface-029.vercel.app/')
            const home=new contentValidation();
            const mens=new contentValidation();
            home.Homepage();
            mens.mens();
        });

          it('velidate a footer link', () => {      
            const footerlink1=new footer();
            footerlink1.validfooter();
    
        }); 


});