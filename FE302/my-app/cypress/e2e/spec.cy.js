describe("The Home Page", () => {
  it("successfully loads", () => {
    // cy.intercept({
    //   method: "GET",
    //   url: "https://student-json-api.lidemy.me/posts?_sort=createdAt&_order=desc",
    // }).as("getPosts");

    cy.intercept(
      "https://student-json-api.lidemy.me/posts?_sort=createdAt&_order=desc",
      [
        {
          id: 1,
          title: "hello",
          createdAt: 12312312345,
        },
        {
          id: 2,
          title: "yoyoyo",
          createdAt: 123123454321,
        },
      ]
    );
    cy.visit("http://localhost:3000/");
    cy.contains("hello");
  });
});
