# React Native useState Hook Asynchronous Update Bug

This repository demonstrates a common but subtle bug in React Native when using the `useState` hook.  The issue arises from the asynchronous nature of state updates.  When you update state within a function that also uses the state's value, you can encounter unexpected behavior, especially when logging the value immediately after the update.

## Bug Description
The `bug.js` file contains a component that increments a counter. However, the `console.log` statement inside the `incrementCount` function will always output the *previous* value of `count` rather than the updated value. This is because React updates the state asynchronously and the `console.log` executes before the state change reflects.  The UI will correctly reflect the updated value, but the logging will be incorrect.

## Solution
The `bugSolution.js` file shows how to resolve this issue. Instead of directly logging `count`, which is the previous state, we use the updated value from the functional update provided in `setCount`.