import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <main class="container">

        <section class="col">
          <div class="row">
            <h1>BE PREPARED</h1>
          </div>
          <div class="row">

            <div class="container" id="forecast-container">
              <div class="col s3"></div>
              <div class="col">day 1</div>
              <div class="col">day 2</div>
              <div class="col">day 3</div>
              <div class="col">day 4</div>
              <div class="col">day 5</div>
              <div class="col s3"></div>
            </div>

          </div>
          <div class="row">
            <h1>I am Nathan Stephens</h1>
          </div>
        </section>
      </main><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </>

  );
}

export default App;
