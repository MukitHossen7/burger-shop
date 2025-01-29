import './App.css';

function App() {
  const headingStyle = {
    color: 'green',
    fontSize: '24px',
    textAlign: 'center',
  };

  return (
    <div>
      <h1>welcome to our website</h1>
      <h1 style={headingStyle}>welcome to our website</h1>
    </div>
  );
}

export default App;
