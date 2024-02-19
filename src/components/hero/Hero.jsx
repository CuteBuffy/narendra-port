export default function Hero() {
  return (
    <>
      <div className="container container-hero">
        <div className="wrapper">
          <img className="light-frame" src="./public/icons/Property 1=Light Frame.png" alt="light frame" />
          <div className="text-info">
            <h1 className="title">Hi 👋, I'm Narendra</h1>
            <h2 className="description">Freelance Full Stack Designer</h2>
            <p className="description_2">
              “good design makes the world a better place.”
            </p>
            <div className="buttons">
              <button className="myWork">My Work</button>
              <button className="talk">Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
