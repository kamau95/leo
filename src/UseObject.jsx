import React, { useState } from 'react'; // Importing React and useState hook

const UseObject = () => {
  // Defining functional component named UseObject

  const [name, setName] = useState({ firstName: '', lastName: '' });
  // Declaring state variable called "name" and initializing it as an object with two properties (firstName and lastName) with initial values of empty strings. Also defining a function to update the state variable "name".

  return (
    <div>
      {/* Start of JSX markup */}
      <form>
        {/* Start of form */}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) =>
            setName({ ...name, firstName: e.target.value })
          }
          // Input field for first name, setting its value to the firstName property of the name state variable. When the user types into this input field, it triggers the onChange event, which updates the name state variable using the setName function with the new value of firstName obtained from the input field.
        />
        <h1>0</h1>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) =>
            setName({ ...name, lastName: e.target.value })
          }
          // Input field for last name, setting its value to the lastName property of the name state variable. When the user types into this input field, it triggers the onChange event, which updates the name state variable using the setName function with the new value of lastName obtained from the input field.
        />
      </form>
      {/* End of form */}


      <h1>your first name is {name.firstName}</h1>
      {/* Displaying the value of firstName property of the name state variable in a heading element */}



      <h1>your last name is {name.lastName}</h1>
      {/* Displaying the value of lastName property of the name state variable in a heading element */}
    </div>
 
  );
};

export default UseObject; // Exporting the component for use in other parts of the application
