function About(props) {
  return (
    <div className="about">

      <p className="titre">{props.titre}</p>
      <p className="para">{props.description}
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        nihil dolor beatae rem facilis quae sapiente tempora aperiam quidem
        sunt. */}
      </p>
      {/* <p className="titre">Interest</p>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        minus molestiae itaque reprehenderit. Optio, quae.
      </p> */}
    </div>
  );
}
export default About;