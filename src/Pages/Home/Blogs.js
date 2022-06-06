import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h1 className="text-xl font-bold my-3">
        {" "}
        How will you improve the performance of a React Application?
      </h1>
      <p>
        Answer: Following these steps we can improve React application
        performance
        <ol>
          <li>Measuring Performance</li>
          <li>ANALYZING REACT COMPONENTS WITH CHROME’S PERFORMANCE TAB</li>
          <li>React Developer Tools Profiler</li>
          <li>Memoization With React.memo()</li>
          <li>Bundling And Minification</li>
          <li>BENEFITS OF CODE SPLITTING </li>
          <li>Immutable Data Structures</li>
          <li>AVOID ANONYMOUS FUNCTIONS</li>
        </ol>
      </p>
      <h1 className="text-xl font-bold my-3">
        What are the different ways to manage a state in a React application?
      </h1>
      <p>
        Answer: When we talk about state in our applications, it’s important to
        be clear about what types of state actually matter. There are four main
        types of state you need to properly manage in your React apps:
        <ol>
          <li>Local state</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>URL state</li>
        </ol>
      </p>
      <h1 className="text-xl font-bold my-3">
        {" "}
        How does prototypical inheritance work?
      </h1>
      <p>
        Answer: The Prototypal Inheritance is a feature in javascript used to
        add methods and properties in objects. It is a method by which an object
        can inherit the properties and methods of another object. Traditionally,
        in order to get and set the [[Prototype]] of an object, we use
        Object.getPrototypeOf and Object
      </p>
      <h1 className="text-xl font-bold my-3">
        Why you do not set the state directly in React.
      </h1>
      <p>
        Answer: One should never update the state directly because of the
        following reasons:
        <ol>
          <li>
            If you update it directly, calling the setState() afterward may just
            replace the update you made.
          </li>
          <li>
            When you directly update the state, it does not change this.state
            immediately.Instead, it creates a pending state transition, and
            accessing it after calling this method will only return the present
            value.
          </li>
          <li>you will lose control of the state across all components</li>
        </ol>
      </p>

      <h1 className="text-xl font-bold my-3">
        You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h1>
      <p>
        Answer: By implementing find method we can find the products by their
        name. The find() method returns the value of the first element that
        passes a test. The find() method executes a function for each array
        element. The find() method returns undefined if no elements are found.
        The find() method does not execute the function for empty elements.
      </p>

      <h1 className="text-xl font-bold my-3">
        What is a unit test? Why should write unit tests?
      </h1>
      <p>
        Answer: UNIT TESTING is a type of software testing where individual
        units or components of a software are tested. The purpose is to validate
        that each unit of the software code performs as expected. Unit Testing
        is done during the development (coding phase) of an application by the
        developers. Unit Tests isolate a section of code and verify its
        correctness. A unit may be an individual function, method, procedure,
        module, or object. In SDLC, STLC, V Model, Unit testing is first level
        of testing done before integration testing. Unit testing is a WhiteBox
        testing technique that is usually performed by the developer. Though, in
        a practical world due to time crunch or reluctance of developers to
        tests, QA engineers also do unit testing. <br /> <br />
        why? Unit Testing is important because software developers sometimes try
        saving time doing minimal unit testing and this is myth because
        inappropriate unit testing leads to high cost Defect fixing during
        System Testing, Integration Testing and even Beta Testing after
        application is built. If proper unit testing is done in early
        development, then it saves time and money in the end.
      </p>
    </div>
  );
};

export default Blogs;
