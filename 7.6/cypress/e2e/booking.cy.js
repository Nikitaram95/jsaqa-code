import loginAdmin from "../fixtures/loginData.json"
import mainPage from "../fixtures/mainPage.json"


describe("Booking ticket", () => {
    it("Take the name of the movie from under the admin and book a ticket ", () => {
        cy.visit("/admin");
        loginAdmin.forEach((test) => {
            cy.get(test.email).type(test.login),
            cy.get(test.password).type(test.pass),
            cy.get(test.button).click();
        });

        mainPage.forEach((selector) => {
            cy.get(selector.film).last().then(($el) => {
            const filmTitle = $el.text();
            cy.visit("/");
            cy.get(selector.week).eq(3).click();
            cy.contains(filmTitle).parents(".movie").get(selector.seansTime).contains("16:00").click();
            cy.get(`.buying-scheme__wrapper > :nth-child(${selector.row}) > :nth-child(${selector.seat})`).click();
            cy.get(selector.button).click();
            cy.contains("Вы выбрали билеты:").should("be.visible");
            });
        });        
    })
}) 