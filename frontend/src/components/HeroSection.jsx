
import hero from "../assets/heroDesktop.jpg"
const HeroSection = (props) => {
  return (
    <div   style={{
        backgroundImage: `url(${hero})`,
        backgroundSize:"cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} 
      className='grid grid-cols-1  md:grid-cols-2 w-full min-h-[55vh] md:min-h-[50vh]'>
      
      <div className='text-white flex flex-col px-6 md:px-12 justify-center md:text-left text-center'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>{props.title}</h1>
      <p className='text-base max-w-lg sm:text-lg'>{props.description}</p>
      </div>
    </div>
  )
}

export default HeroSection

