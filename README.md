React Form with Redux
This application will use React and Redux to allow a user to add items to the Kochab snack table.

Base Requirements
Create a new React app with create-react-app
Bring in redux and react-redux
Set up your store and Provide# React Form with Redux

This application will use React and Redux to allow a user to add items to the Kochab snack table.

## Base Requirements

- Create a new React app with `create-react-app`
- Bring in `redux` and `react-redux`
- Set up your `store` and `Provider`
- Create an input form component that allows the user to add a snack (as a string) to an array. 
  - This form will `dispatch` an `action` and run a `reducer`. This reducer needs to add this new item to an array of snack items.
- Display this list of snacks on the DOM with another component called `SnackList`.

Remember to `connect` and `mapReduxStateToProps` in each component that needs access to the Redux Store! 

```
const mapReduxStateToProps = reduxState => ({reduxState});

export default connect(mapReduxStateToProps)(ComponentClassName);
```
