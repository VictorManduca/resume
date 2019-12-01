<template>
  <div class="resume">
    <div class="header">
      <img alt="Self picture" src="../assets/beard.jpg" />

      <h1>Victor Hugo Manduca Rizo</h1>
      <ul>
        <li>Fullstack developer</li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/VictorManduca/">
            <img src="../assets/github.png" alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/victormanduca/">
            <img src="../assets/linkedin.png" alt="Linkedin" />
          </a>
        </li>
      </ul>
    </div>
    <div class="skills">
      <h2>Skills</h2>
      <ul>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Vue.js</li>
        <li>React Native</li>
        <li>Golang</li>
        <li>PHP</li>
        <li>Java</li>
        <li>Python</li>
        <li>Django</li>
        <li>AWS</li>
        <li>Lambda Functions</li>
        <li>Jest</li>
        <li>Serveless</li>
        <li>SQL</li>
        <li>MySQL</li>
        <li>MariaDB</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Linux</li>
      </ul>
    </div>
    <div class="experience">
      <h2>Experience</h2>
      <div class="daksa">
        <h3>Daksa - Developer internship</h3>
        <div class="daksaText">
          <p>I was the responsible for the company’s mobile app, that consumed the API of company’s blog and showed the articles in the app, developed with React Native. Besides that, I developed websites using: HTML, CSS3, Javascript and PHP with CodeIgniter</p>
        </div>
      </div>
      <div class="accesys">
        <h3>Accesys Solutions - Developer internship</h3>
        <div class="accesysText">
          <p>In my internship we are responsible to develop applications to provide for our clients the management of their business. To do that, we use: MySQL and MariaDB, Node.js and Express.js, Golang (websocket) and PHP (webhook), AWS (serverless, lambda functions), Jest</p>
        </div>
      </div>
    </div>
    <div class="education">
      <h2>Education</h2>
      <p>Studying System Analysis and Development at Fatec.</p>
    </div>
    <div class="footer">
      <p>Victor Hugo Manduca Rizo - victor.manduca@hotmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Default configuration */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Congigurating resume image */
img {
  border-radius: 50rem;
  width: 10rem;
}

/* Class of header */
.header ul li {
  font-weight: bold;
  font-size: 20px;
}
.header ul li img {
  width: 3rem;
}

/* Class of skills */
.skills {
  padding: 1rem 15rem;
}
.skills ul li {
  font-weight: bold;
  margin: 7px;
  padding: 5px 10px;
  background-color: #e4e4ea;
  background-size: 30rem, auto, contain;
}
@media screen and (max-width: 720px) {
  .skills {
    padding: 0rem;
  }
}

/* Class of experience */
.expirence {
  padding: 1rem 15rem;
}
.daksa {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 20rem;
  grid-column-gap: 0rem;
}
.accesys {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 20rem;
}
@media screen and (max-width: 720px) {
  .daksa {
    display: inline;
    padding: 0;
  }
  .accesys {
    display: inline;
    padding: 0;
  }
}
@media screen and (max-width: 1024px) {
  .daksa {
    padding: 5px 5rem;
  }
  .accesys {
    padding: 5px 5rem;
  }
}

/* Class of contactme */
.contactme {
  padding: 1rem;
}

/* Class of footer */
.footer {
  padding-top: 30px;
}
</style>