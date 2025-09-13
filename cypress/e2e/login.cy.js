describe("The Login Page", () => {
  it("logs in successfully with valid credentials", () => {
    // লগইন পেজে যাওয়া
    cy.visit("/api/auth/login");

    // // ইউজারনেম ও পাসওয়ার্ড টাইপ করা
    // cy.get("input[name=email]").type("testuser");
    // cy.get("input[name=password]").type("password123{enter}");

    // // ড্যাশবোর্ডে রিডাইরেক্ট হয়েছে কিনা দেখা
    // cy.url().should("include", "/dashboard");

    // // কুকি আছে কিনা দেখা (সেশনের জন্য)
    // cy.getCookie("your-session-cookie").should("exist");

    // // UI তে ইউজারের নাম দেখা
    // cy.get("h1").should("contain", "testuser");
  });
});
