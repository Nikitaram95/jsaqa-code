import mainPage from "../fixtures/mainPage.json";

describe("Main page", () => {

  beforeEach(() => {
    cy.visit("/")

  });

  it("Main page should be visible", () => {
     mainPage.forEach((selector) => {
         
      cy.get(selector.title).should("be.visible");
      cy.get(selector.week).should("have.length", 7);
      cy.get(selector.moviePoster).should("have.length", 3);
      cy.get(selector.moviePosterImage).should("be.visible");
      cy.get(selector.movieTitle).should("have.length", 3);
      cy.get(selector.movieSynopsis).should("be.visible");
      cy.get(selector.seansTime).should("be.visible");
      cy.get(selector.hall).should("be.visible");
    }) 

  });


  it("Should be possible booking ticket", () => {
    mainPage.forEach((selector) => {
     
      cy.get(selector.week).eq(3).click();
      cy.get(".movie").first().contains("10:00").click();
      cy.get(`.buying-scheme__wrapper > :nth-child(${selector.row}) > :nth-child(${selector.seat})`).click();
      cy.get(selector.button).click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
   })

 })

})


