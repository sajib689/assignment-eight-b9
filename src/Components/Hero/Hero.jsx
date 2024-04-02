import { Link } from 'react-router-dom';
import img from '../../assets/b.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Hero = () => {
    return (
        <div className="hero min-h-screen mb-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img data-aos="fade-left" src={img} className=" rounded-lg " />
          <div className='ms-4'>
            <h1 data-aos="fade-right" className="md:text-7xl text-4xl font-bold">Books to freshen up <br /> <span className=''>your bookshelf</span></h1>
            <Link data-aos="fade-right" to='/listbooks' className="btn mt-10 text-white bg-gradient-to-r from-[#23BE0A] to-[#329f21]">View The List</Link>
          </div>
        </div>
      </div>
    );
};

export default Hero;