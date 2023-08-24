import '../Styles/Page-Styles/Home.css';

const Home = () => (
  <>
    <div className="home-container">
      <h2 className="home-title">Welcome to our page!</h2>
      <article className="home-article">
        <p>
          Explore the exciting world of mathematics with us.
          Our website created with React offers you two exciting sections:
        </p>

        <p>
          <strong>Interactive Calculator:</strong>
          {' '}
          Test your math skills with our interactive calculator.
          Whether you are solving simple problems or complex equations,
          our calculator is your reliable companion for any math challenge.
        </p>

        <p>
          <strong>Get Inspired by Success:</strong>
          {' '}
          Raise your spirits with our section of motivational and success
          phrases. We connect to an API that offers the most inspiring
          words from successful leaders and thinkers. Let these phrases
          propel you to reach new heights in your studies and in everyday
          life.
        </p>

        <p>
          Join us at Math Magicians as we combine the magic of math with
          the inspiration to achieve great things. Explore, learn and
          get motivated in one place!
        </p>
      </article>
    </div>

  </>
);

export default Home;
