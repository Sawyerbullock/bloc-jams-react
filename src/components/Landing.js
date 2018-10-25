import React from 'react';

const Landing = () => (
  <section className="landing">
    <div className="container-fluid h-100" id="hero-content">
      <h1 className="" id="hero-title">Turn the Music up!</h1>
    </div>
    <section className="row selling-points">
      <div className="col-md-4 point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="col-md-4 point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="col-md-4 point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This sreaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
