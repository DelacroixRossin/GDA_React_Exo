
import React from 'react';
import ReactDOM from 'react-dom/client';
import Blog from './Blog';

// Methode 1

// ReactDOM.render(

// <App />,
//   document.getElementById('root') 
    
// );

// Methode 2 en React 18

//ReactDOM.createRoot(document.getElementById('root')).render(<App />)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Blog />)




