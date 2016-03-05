## Here you can find 3 very simple implementations of a small timer:

- Static HTML + jQuery
- React component with internal state
- React component using Redux to manage state

### Running the code
You will need a fairly recent version of nodejs installed. Then just run:

    npm install
    npm run webpack

Afterwards just open your browser on http://localhost:8080

### About the code

You can find the entry point for the programs in frontend/js/main.js
This initializes the 3 versions of the code.

For the jQuery version: on document.ready it calls the initialization function (jquery_timer.js#initJqueryTimer). Relevant files for the jQuery code:

- index.html (contains the HTML to be manipulated through jQuery)
- jquery_timer.js


For the React version: on document.ready it mounts the component. Relevant files for the React code:

- react_timer.js.jsx


For the Redux version: it creates the redux datastore, and on document.ready it mounts the component. Relevant files for the React + Redux code:

- redux_timer.js.jsx
- action_types.js
- actions.js
- reducers.js
