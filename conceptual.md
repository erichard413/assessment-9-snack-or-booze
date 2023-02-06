### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  React Router simulates a back end server router. Meaning that depending on the url string, different react components will be displayed. This allows for "single app" react apps with multiple pages.

- What is a single page application?

  A single page application is an application that uses a single index.html and App component, with React components rendered on the page depending on the react router. This allows for you to navigate through your app pages, all in the same App component. 

- What are some differences between client side and server side routing?

  Server side routing requires a back end server, and is actually sending post/patch/get/put requests. Whereas client side routing is mocking a back end server. Client side routing does not include requests to the server, and instead  handles all routing through the local browser.

- What are two ways of handling redirects with React Router? When would you use each?

  <Redirect > : this is depreciated in react-router 6.0
  <Navigate> : this is the preferred way to redirect.
  useNavigate() is a hook we can use as well.

- What are two different ways to handle page-not-found user experiences using React Router?

  You can redirect the user using <Navigate to="*">, or you can direct the user to a custom 404 page if the url string is not found in react router.

- How do you grab URL parameters from within a component using React Router?


  In the react router, you can declare a param variable by using /:variable, then in your component you can use useParams() hook.

- What is context in React? When would you use it?

  Context is a way of passing data through a react app that does not require prop mining -> ie: every single nested child within your react component needs to be passed a prop.

- Describe some differences between class-based components and function
  components in React.

  Class based components are the old way of creating react components. They extend the Component class, you can use state but you do not have access to React Hooks. Function based components allow for the use of hooks to create cleaner, shorter react components.

- What are some of the problems that hooks were designed to solve?

  Hooks were created to solve duplication of code within react components. Hooks allow us a way to define a broad function, and pass it into as many react components as we'd like. Also as a way to store data in state, or do execute functions on render or change to a piece of state such as useEffect.