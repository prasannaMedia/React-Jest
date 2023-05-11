For the following high level requirement write down detailed technical specifications. Ensure to
cover all relevant scenarios. This specification will be used by your team of junior engineers to
build the functionality. Make suitable assumptions where needed.
ANS:
User Sign-Up:
Display a sign-up form with name, email, and password fields.
Validate the email format and password criteria.
Create a user account and send a verification token via email.



Email Verification:
User clicks a unique verification link with the token.
Server validates the token and marks the account as verified.


TOTP Registration:
After email verification, allow users to register a TOTP.
Provide a form to enter a secret key or scan a QR code.
Validate and securely store the TOTP secret key.


User Login:
Show a login form with email and password fields.
Validate the form fields and authenticate the user.
If TOTP is enabled, prompt for a TOTP code after successful login.
Validate the TOTP code and allow access if correct.


Unit Test Case (Jest):

Test email field validation on the sign-up form:
Input: "test@example"
Expected Output: Validation error: "Invalid email format"
Test password field validation on the sign-up form:
Input: "pass"
Expected Output: Validation error: "Password must be at least 6 characters long"


Integration Test Case (React Testing Library):

Test successful sign-up:
Input: Fill out the sign-up form with valid information.
Action: Click the sign-up button.
Expected Output: User account created, verification email sent.


E2E Test Case (React Testing Library + Supertest):

Test email verification:
Input: User receives the verification email.
Action: Click the verification link.
Expected Output: User account marked as verified


List the different testing libraries / approaches that you have considered and the reasoning for
choosing the specific library.
1)Jest
2)Enzyme
3)Cypress
4)React testing library
5)supertest


I will pick libary based on Requirements
for unit testing Jest is better
Reason:It provides a comprehensive set of testing utilities, including test runners, assertions, and mocking capabilities and easy to setup methods will be available globally 

for Integration Test:
React Testing Library: This library focuses on testing React components in a way that simulates real user interactions. It provides a simple and intuitive API for querying and interacting with components, ensuring that tests resemble how users interact with the application. React Testing Library is suitable for integration and end-to-end (E2E) testing scenarios.


for End to end test:
Supertest: Supertest is an HTTP testing library that allows testing of HTTP endpoints and server responses. It can be used for testing the email verification process, as it enables making requests to the server and validating the responses.


code is available in src folder

How to Run:
clone Repo
npm install
npm test 
npm start



