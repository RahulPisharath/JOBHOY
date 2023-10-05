import { Link } from "react-router-dom";
import Carouselitem  from "./Carouselitem";
const About = () => {
    return (
        <div className='min_ht'>
        <div className="container-fluid pt-5 pb-2 bg_grey">
    <div className="container">
      <h4 className="mb-2 bold black text-uppercase">
        Most Used Services
      </h4>
      <Link to={'/detail/1'}>
      <Carouselitem />
      </Link>
      

    </div>
  </div>
  <div className="container-fluid pt-5 pb-2">
    <div className="container">      
      <div className="">
        <h4 className="mb-2 bold black text-uppercase">
          Recommended Services
        </h4>
        <Carouselitem />
      </div>
    </div>
  </div>
</div>
    )
}

export default About;