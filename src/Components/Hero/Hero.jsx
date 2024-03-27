import { Link } from 'react-router-dom';
import img from '../../assets/b.png'

const Hero = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className=" rounded-lg " />
          <div className='ms-4'>
            <h1 className="text-7xl font-bold">Books to freshen up <br /> <span className=''>your bookshelf</span></h1>
            <Link to='/listbooks' className="btn mt-10 text-white bg-gradient-to-r from-[#23BE0A] to-[#329f21]">View The List</Link>
          </div>
        </div>
      </div>
    );
};

export default Hero;