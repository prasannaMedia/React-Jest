// SignupForm.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignupForm from './SignupForm';

describe('SignupForm', () => {
    it('submits the form with valid input', () => {
        // Mock an alert function
        window.alert = jest.fn();

        // Render the form component
        const { getByPlaceholderText, getByText } = render(<SignupForm />);

        // Get form elements
        const nameInput = getByPlaceholderText('Name');
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');
        const submitButton = getByText('Sign Up');

        // Fill out the form
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        // Submit the form
        fireEvent.click(submitButton);

        // Assert that the form was submitted successfully
        expect(window.alert).toHaveBeenCalledWith('Sign-up successful!');
    });

    it('displays an alert if email field is empty', () => {
        // Mock an alert function
        window.alert = jest.fn();

        // Render the form component
        const { getByText } = render(<SignupForm />);

        // Get form elements
        const submitButton = getByText('Sign Up');

        // Submit the form without filling the email field
        fireEvent.click(submitButton);

        // Assert that an alert was shown with the correct error message
        expect(window.alert).toHaveBeenCalledWith('Please enter your email');
    });

    it('displays an alert if password is too short', () => {
        // Mock an alert function
        window.alert = jest.fn();

        // Render the form component
        const { getByPlaceholderText, getByText } = render(<SignupForm />);

        // Get form elements
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Password');
        const submitButton = getByText('Sign Up');

        // Fill out the form with a short password
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'pass' } });

        // Submit the form
        fireEvent.click(submitButton);

        // Assert that an alert was shown with the correct error message
        expect(window.alert).toHaveBeenCalledWith('Password must be at least 6 characters long');
    });
});
