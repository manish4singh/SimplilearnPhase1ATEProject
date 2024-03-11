describe('This spec will be used to test ATM search functionality', () => {
  
  beforeEach(() => {
    cy.visit('https://www.hsbc.co.in/')
  })

  it('Validate the ATM search', () => {
    
    // click on find your nearest branch or ATM link in footer section
    cy.xpath("//footer//a[contains(text(),'Find your nearest HSBC branch or ATM')]").click()

    //validate in new page the URL has string = '/ways-to-bank/branches/'
    cy.url().should('include',"/ways-to-bank/branches/")

    //validate Header as 'Branches & ATM'
    cy.xpath("//h1").contains("Branches & ATMs")

    //validate click on 'Branch & ATM Locator' button
    cy.xpath("//span[text()='Branch & ATM Locator']").click()

    // select country drop-down
    cy.get("input[role='combobox']").click({force:true})

    // Type country as India in search box
    cy.get("input#searchInput").type("India") 

    //select India from unordered list drop-down
    cy.get("ul#autocomplete-results").contains("India").click()

    cy.wait(8000); 

    //validate ATM header name as Rajbhavan Road
    cy.get("p[class='uItFVQvJsoQVBXhG5ERC']").should('contain.text','Rajbhavan Road')

    //click on Show more results button
    cy.xpath("//button[text()='Show more results']").click()

    //Check second ATM branch name tooltip as 2 in red color is getting displayed
    cy.xpath("//ul//li//span[text()='2']").should('be.visible')

    cy.wait(4000); 
   
    //Check Instagram in social media option in footer section
    cy.xpath('//a[@id="content_socialmediafooterlink_1"]').should('be.visible');

    //Check Facebook in social media option in footer section
    cy.xpath('//a[@id="content_socialmediafooterlink_2"]').should('exist');

    //Check Twitter in social media option in footer section
    cy.xpath('//a[@id="content_socialmediafooterlink_3"]').should('exist');

    //Check Youtube in social media option in footer section
    cy.xpath('//a[@id="content_socialmediafooterlink_4"]').should('exist');

    //Click on HSBC Logo
    cy.xpath('//div[@class="header-logo lg-2"]/a').click();

    //Validate page is navigating to home page by its title
    //cy.xpath('/html/head/title').should('have.text','HSBC India - Credit Cards, NRI Services, Saving and Deposit');

    cy.scrollTo('bottom');

    //Check and Click on Privacy link
    //cy.xpath('//nav/ul/li[3]/a[text()="Privacy Statement"]').click();
        
    
  })
})