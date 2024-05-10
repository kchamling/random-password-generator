# Password Generator Readme

This repository contains a simple password generator web application built using HTML, CSS, and JavaScript. The application generates secure passwords based on user-defined criteria and allows for easy copying of generated passwords to the clipboard.

## Features

- Generates passwords with a length of 16 characters.
- Includes numbers, uppercase letters, lowercase letters, and symbols in generated passwords.
- Allows users to copy generated passwords to the clipboard with a single click.

## Usage

To use the password generator:

1. Open the `index.html` file in a web browser.
2. Click the "Generate Password" button to generate a secure password.
3. The generated password will be displayed in the input box.
4. Click the copy icon next to the input box to copy the generated password to the clipboard.

## Files

- `index.html`: Contains the HTML structure of the web application.
- `styles.css`: Contains the CSS styles for the web application.
- `script.js`: Contains the JavaScript code for generating passwords and handling clipboard functionality.

## Code Overview

- The JavaScript code generates passwords with a length of 16 characters by combining numbers, uppercase letters, lowercase letters, and symbols.
- The `generatePasswordBtn` event listener triggers the password generation process when the "Generate Password" button is clicked.
- The `copyIcon` event listener triggers the copying of the generated password to the clipboard when the copy icon is clicked.
- Error handling is included to prevent copying of blank passwords and to handle any errors that may occur during the clipboard copying process.




