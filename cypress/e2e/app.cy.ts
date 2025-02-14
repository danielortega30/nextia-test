describe("NextiaTest App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should navigate through main features", () => {
    // Check Users page
    cy.get("h1").should("contain", "Users");

    // Navigate to Posts page
    cy.contains("Posts").click();
    cy.url().should("include", "/posts");
    cy.get("h1").should("contain", "Posts");

    // Create new post page
    cy.contains("Create Post").click();
    cy.url().should("include", "/posts/create");
    cy.get('input[name="title"]').type("Test Post");
    cy.get('textarea[name="body"]').type("This is a test post");
    cy.contains("button", "Create Post").click();
    cy.url().should("include", "/posts");
  });

  it("should display user details", () => {
    cy.contains("View Details").first().click();
    cy.get("h1").should("exist");
    cy.url().should("include", "/users");
    cy.contains("User Posts").should("exist");
  });

  it("should display post details", () => {
    cy.contains("Posts").click();
    cy.contains("View Details").first().click();
    cy.contains("Comments").should("exist");
  });

  it("should display edit post", () => {
    cy.contains("Posts").click();
    cy.contains("Edit").first().click();
    cy.contains("Edit Post").should("exist");
    cy.contains("Save Changes").click();
    cy.url().should("include", "/posts");
  });
});
