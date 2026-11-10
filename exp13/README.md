# Experiment 13 – Promise-Based Asynchronous Operation in React

## Aim
To simulate an asynchronous operation in React using JavaScript Promises and handle fulfilled and rejected states.

## Technologies
- React
- JavaScript ES6 Promises
- Vite
- CSS

## Features
- Simulated 3-second asynchronous student data request.
- Promise fulfillment using `.then()`.
- Promise rejection handling using `.catch()`.
- Cleanup after completion using `.finally()`.
- Pending, fulfilled, and rejected UI states.
- Professional responsive Academia dashboard.

## Student data
- Name: Arun Kumar
- Department: Computer Science and Engineering
- Year: III Year
- Register Number: STU-2026-001

## Project structure
```text
React_Promises_Experiment_13/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

## Algorithm
1. Initialize React state variables for student data, loading, error, request count, and status.
2. Create a function that returns a Promise.
3. Use `setTimeout()` to simulate a 3-second asynchronous operation.
4. Resolve the Promise with student details for a successful request.
5. Reject the Promise when the rejection test is selected.
6. Use `.then()` to process fulfilled data.
7. Use `.catch()` to handle rejected operations.
8. Use `.finally()` to stop the loading state after completion.
9. Render the corresponding output based on the Promise state.

## Output
<img width="1825" height="814" alt="image" src="https://github.com/user-attachments/assets/1b44308b-928b-4028-9d6b-93e82f16f66a" />

<img width="1799" height="804" alt="image" src="https://github.com/user-attachments/assets/dee343cc-6d97-4422-aceb-7f6985f04ead" />

<img width="622" height="459" alt="image" src="https://github.com/user-attachments/assets/df2c0268-60e8-4252-b21e-93bb4a332061" />



## Result
The React application demonstrates asynchronous Promise execution and handles both successful and rejected operations.
