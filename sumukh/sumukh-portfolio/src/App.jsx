import React from 'react'

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Sumukh</h1>
        <p className="subtitle">Full-stack Developer — Portfolio</p>
        <div className="contact">
          <a href="tel:9731785718">📞 9731785718</a>
          <a href="mailto:sumukhb.23.decp@acharya.ac.in">✉️ sumukhb.23.decp@acharya.ac.in</a>
        </div>
      </header>

      <main>
        <section id="about">
          <h2>About</h2>
          <p>Hi — I'm Sumukh. I build web applications and enjoy solving user-focused problems.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            <article className="card">
              <h3>Project One</h3>
              <p>Short description of project one. Replace with your project details.</p>
            </article>
            <article className="card">
              <h3>Project Two</h3>
              <p>Short description of project two. Replace with your project details.</p>
            </article>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul className="skills">
            <li>JavaScript / React</li>
            <li>HTML & CSS</li>
            <li>Node.js / Express</li>
            <li>SQL / NoSQL</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Reach out: <a href="tel:9731785718">9731785718</a> • <a href="mailto:sumukhb.23.decp@acharya.ac.in">sumukhb.23.decp@acharya.ac.in</a></p>
        </section>
      </main>

      <footer>
        <small>© {new Date().getFullYear()} Sumukh</small>
      </footer>
    </div>
  )
}
