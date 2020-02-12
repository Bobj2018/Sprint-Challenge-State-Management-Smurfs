1. What problem does the context API help solve? It helps maintain and prevent prop-drilling
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? The action is what is called in dispatch. Reducers is uses to create new state without touching the original state. The store is the Application Level State.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
AppState is initalized in the App.js and is able to be used in the entire app, while CompState is used in components and is for smaller data.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? thunk allows you to do more with creators by allowing you to call multiple dispatches that affect the app.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I enjoy using Redux because of the way it uses middleware.
