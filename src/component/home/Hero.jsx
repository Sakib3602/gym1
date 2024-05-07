import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/qjC6yWk/main2.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl lg:text-5xl md:text-5xl font-bold">Build Your Heart/mind/body</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link 
             to={'/contact'}
              className="px-5 py-1.5 text-[14px] lg:text-[20px] relative rounded group  text-white font-medium inline-block"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="relative">Contact</span>
            </Link >
    </div>
  </div>
</div>
  );
};

export default Hero;
