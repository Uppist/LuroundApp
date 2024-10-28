/** @format */
import "../style.css";
import About from "./About";
import Details from "./Details";

export default function AboutDetails({ about, socialLink }) {
  return (
    <div className='aboutdetails'>
      <About about={about} />
      <Details socialLink={socialLink} />
    </div>
  );
}
