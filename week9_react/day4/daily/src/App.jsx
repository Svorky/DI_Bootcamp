import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState('')

  useEffect(() => {
    getHello();
  }, []);

  const getHello = async () => {
    const response = await fetch('http://localhost:5000/api/hello');
    const data = await response.text();
    console.log(data);
  };

  const submit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('http://localhost:5000/api/world', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const text = await response.text()
    setText(text)
  };

  return (
    <div className="App">
      <form onSubmit={ submit }>
        <input type="text" placeholder='name' name='name' />
        <input type="submit" value="Submit" />
      </form>
      <p>{text}</p>
    </div>
  );
}

export default App;
