import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"
import Student from "./components/Student.jsx"

function App() {

  return (
    <>
    <Header/>
      <h1>Welcome to my React App</h1>
      <p>This is a simple React application.</p>
      <p>It is built using Vite and React.</p>
      <p>It is a simple application to demonstrate the use of React.</p>
      <p>It is a simple application to demonstrate the use of React.</p>
      <Student name='Mayank' age={23}/>
      <Student name='Mahesh' age={24}/>
      <Card/>
    <Footer/>
    </>
  )
}

export default App
