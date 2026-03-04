///<reference types="cypress"/>


describe("Register", () => {
    it("Creation du compte", () => {
        // aller sur le lien     
        cy.visit("https://agropeyi.fr/");
        //clicker sur le lien inscription
        cy.get("a[href='inscription.php']").click();
        // Remplir les champs
        cy.get("#nom").type("Marie");
        cy.get("#prenom").type("Marie123");
        // Génération d'une variable email
        // const email = `test${Date.now()}@mail.com`
        const number = Math.floor(Math.random() * 901) + 100
        const email = "user" + number + "@gmail.com";
        cy.get("#email").type(email);
        cy.get("#telephone").type("0745235689");
        cy.get("#adresse").type("dz");
        cy.get("#ville").type("Tizi");
        cy.get("#code_postal").type("94200");
        cy.get("#pays").select("France");
        cy.get("#mot_de_passe").type("Marie123");
        cy.get("#confirmer_mot_de_passe").type("Marie123");
        cy.get(".btn.btn-fuchsia").click();
        //Vérifier l'alert dans le cas où les donneés sont incorrect
        // cy.on('window:alert', (text) => {
        // expect(text).to.contains('Mot de passe incorrect')
        // })
        cy.get(".alert.alert-success").should("be.visible");
        cy.contains("Succès ! Inscription réussie ! Vous pouvez maintenant vous connecter.").should("be.visible");


    })



})
