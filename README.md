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