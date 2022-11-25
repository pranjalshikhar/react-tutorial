*Redux is a predictable state container for JavaScript applications.*
[Manage the state of your application in a predictable way, redux can help you.]

1. It is for JAvaScript applications.
- Redux is not tied to React
- Can be used with Angular, Vue, and with Vanilla JavaScript.
- Redux is a library for JavaScript applications.
  
2. It is a state container.
- Redux stores the state of your application.
- Consider a react app - state of a component.
- State of an app is the state represented by all the individuals components of that app.
- Redux will store and manage the application state.

3. It is predictable.
- In Redux, all state transitions are explicit and it is possible to keep track of them.
- the changes of your application's state become predictable.


[Summary]
- React is the library used to build interfaces.
- Redux is the library for managing state in a predicatable way in JavaScript applications.
- React-Redux is a library that provides bindings to use react and Redux together in an application.




[Three-Core-Concepts]

Cake Shop Scenario     |  Redux    |  Purpose
-------------------------------------------------------------------------
Shop                   |  Store    |  Holds the state of your application
Intention to BUY_CAKE  |  Action   |  Describes what happened
Shopkeeper             |  Reducer  |  Ties the store and action together

A *store* that holds the state of your application.
An *action* that describes the changes in the state of your application.
A *reducer* which actually carries out the state transition depending on the action.