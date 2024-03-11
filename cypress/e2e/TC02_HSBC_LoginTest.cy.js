describe('HSBC Login test functionality', () => {
  
    beforeEach(() => {
      cy.visit('https://www.hsbc.co.in/')
    })
  
    it('Validate index page and login functionality', () => {
      
      //Validate HSBC Bank Logo
      
      cy.get('div[class="header-logo lg-2"]').find("img").should('be.visible');
  
      // Validate Home Page Title  
      cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')

      //Click on Login button
      cy.xpath('//div[3]/a[@class="selected-item login-button only-one-link"]').click({force: true});

      //Validate Log On header in Login page
      cy.xpath('//h2/span[text()=" Log On   "]').should('exist');

      //Check Continue button is available
      cy.xpath("//button[@id='username_submit_btn']").should('exist');

      //Also validate initially Continue button is disabled.Also validate initially Continue button is disabled.
      cy.xpath("//button[@id='username_submit_btn']").should('be.disabled');

      //Type any random email in the username field
      cy.xpath('//input[@id="username"]').type('abcxy@gmail.com');

      //Now check Continue button is Enabled
      cy.xpath("//button[@id='username_submit_btn']").should('be.enabled');

      //Validate Remember me check box is not checked by default
      cy.xpath("//input[@class='checkbox-hidden-rem']").should('not.be.checked'); 

      //Validate there is a question mark tooltip present on the page
      cy.xpath("//a[@id='username_help_link']").should('exist');

      //Click on the tooltip
      cy.xpath("//a[@id='username_help_link']").click({force: true});

      //Now validate the username header in the new pop-up screen
      cy.xpath("//div[@id='help_content_1']/h3/span[contains(text(),'Username')]").should('exist');

      //Validate there is a Close button in the new pop-up screen
      if(cy.xpath('//span[@class="icon icon-delete"]').should('be.visible'))
      {
          cy.xpath('//span[@class="icon icon-delete"]').click();
      }
      else
      {
        // Click on the close button present in the new pop-up screen
        cy.xpath('//*[@id="mainContainer"]/username/div[2]/div/div[3]/a/span/span[1]').click();
      }    
      
    })
  })