function Header() {
  return (
    <header className='header'>
      <nav className='navbar'>
        <img src='./react-logo.png' className='logo' />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <div className='main-content'>
      <h1>Why I'm excited to learn React</h1>
      <ol className='main-list'>
        <li>I want to be a great developer</li>
        <li>I want to build cool projects</li>
        <li>I want to advance my career</li>
        <li>React is fun</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer className='footer'>
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
