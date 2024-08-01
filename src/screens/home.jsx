import bag from "../assets/bag.png"
import blockchain from "../assets/blockchain.png"
import camera from "../assets/camera.png"
import dress from "../assets/dress.png"
import games from "../assets/games.png"
import run from "../assets/running.png"

function HomeScreen() {
  return (
    <div className="home">
      <div className="main-box">
        <header>
          <nav>
            <h1>skilled</h1>
            <button>Get Started</button>
          </nav>
          <section className="landing">
            <div>
              <h1>Maximize skill, minimize budget</h1>
              <p>
                Our mordern courses across a range of in-demand skills will give
                you the knowledge to live the life you want.
              </p>
              <button>Get Started</button>
            </div>
            <div></div>
          </section>
        </header>
        <main>
          <section>
            <div>
              <h1>
                Check out our <br /> most popular <br /> courses!
              </h1>
            </div>
            <div>
              
              <img src={run} />
              <h1>Animation</h1>
              <p>
                Learn the latest animation techniques to create stunning motion
                design and captivate your audience.
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              {/* <img src={} /> */}
              <h1>Design</h1>
              <p>
                Create beautiful, usable interfaces to help shape the future of
                how the web looks.
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              <img src={camera} />
              <h1>Photography</h1>
              <p>
                Explore critical fundamentals like lighting, composition, and
                focus to capture exceptional photgraphs.
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              <img src={blockchain} />
              <h1>Crypto</h1>
              <p>
                All you need to know to get started investing in crypto. Go from
                beginner to advanced with this 54 hour course.
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              <img src={games} />
              <h1>Gaming</h1>
              <p>
                A step-by-step playbook to help you start, scale and sustain
                your gaming career without outside investment.
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              <img src={dress} />
              <h1>Fashion</h1>
              <p>
                All you need to know to get started with your journey in
                fashion. Go from beginner to advanced with this 54 hour course.
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              <img src={bag} />
              <h1>Business</h1>
              <p>
                A step-by-step playbook to help you start, scale and sustain
                your business without outside investment.
              </p>
              <a href="#">Get Started</a>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <nav>
          <h1>skilled</h1>
          <button>Get Started</button>
        </nav>
      </footer>
    </div>
  );
}

export default HomeScreen;
