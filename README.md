# React Task Tracker App

Task Tracking app to practice basic React component creation and methodologies.

## Features

- Form to add task is initially closed. Add button toggles from 'Add' to 'Close' and shows form to submit new task.
- Each task features a delete button and removes task from UI once clicked.
- Each task with a reminder shows a green indicator. Feature is turned on/off by double clicking task.
- Router used for 'About' link

## Progress

- Practice app currently is front-end only. Exploring options to build backend to store data indefinitely.

💡 Learning moment:

- States get passed down from App() to components, while actions get passed up from components to App().
- Props can be set as default in respective component, so it does not have to be added as prop in component under App()

```sh
Header.defaultProps = {
	title: 'Task Tracker',
};
```

- Prop types can be set for each component too.

```sh
Header.propTypes = {
	title: PropTypes.string.isRequired,
};
```

- 'VS Code extension ES7 React/Redux/GraphQL/React-Native snippets' save time!

`rafce` snippet in new component file produces:

```sh
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
```
