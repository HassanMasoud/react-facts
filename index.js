function Header() {
  return (
    <header>
      <nav>
        <img src='./react-logo.png' width='40px' />
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Why I'm excited to learn React</h1>
      <ul>
        <li>I want to be a great developer</li>
        <li>I want to build cool projects</li>
        <li>I want to advance my career</li>
        <li>React is fun</li>
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <small>&copy; 2022 Muhashamy development. All rights reserved.</small>
    </footer>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))
