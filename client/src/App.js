import React, { Component } from 'react';
import SimpleForm from "./Components/SimpleForm";

const App = () => {
  const divStyles = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div style={divStyles}>
      <SimpleForm />
    </div>
  );
}

export default App;