export default function Hero () {

  return (
      <section className="object-cover lg:h-screen md:h-screen text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img className="shadow-[0px_10px_200px_25px] shadow-center shadow-[#26cdd3] scale-90 hover:scale-100 hover:shadow-2xl transition ease-in-out duration-500 object-cover object-center rounded-lg" alt="hero" src="/images/jose.png"/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font md:text-4xl text-3xl mb-4 font-xl text-white">Jose A. Torres
            <br/><br/>Software Engineer<br/><br/><br/>
          </h1>
          <p className="mb-8 text-xl leading-relaxed">As a creative and resourceful software engineer, I find immense joy in assisting clients and helping them achieve their objectives. My dedication to the craft is evident in the pride I take in my work. The ever-evolving landscape of software engineering excites me, and I approach the future with confidence, knowing that my contributions to the field will be meaningful and impactful.</p><br /><br/>
          <div className="flex justify-center">
            <button className="scale-90 hover:scale-100 inline-flex  text-black bg-[#26cdd3] border-0 py-2 px-6 focus:outline-none hover:bg-[#175f67] rounded hover:text-white text-lg"><a href="https://bocacode.com/candidates/software-engineer/jose-torres" rel="noopener noreferrer" target="_blank">Profile</a></button>
            <button className="scale-90 hover:scale-100 ml-4 inline-flex text-black bg-[#26cdd3] border-0 py-2 px-6 focus:outline-none hover:bg-[#175f67] rounded  hover:text-white text-lg"><a href="/images/Jose_Torres_Resume_2023.pdf" rel="noopener noreferrer" target="_blank">Resume</a></button>
          </div><br/>
          <div className="mt-5">
          <a href="https://github.com/vidojam" className="scale-90 hover:scale-100  ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/github.svg"height="50" width="50" alt="link to project" /></a>
          <a href="https://www.linkedin.com/in/jose-torres-dev" className="scale-90 hover:scale-100   ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/linkedin.svg"height="50" width="50" alt="link to project" /></a>
          <a href="https://jt-portfolio-site.web.app/about" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/link.svg"height="50" width="50" alt="link to project" /></a>
          <a href="mailto:jose.torres@gmail.com" className="scale-90 hover:scale-100 ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/email.svg"height="50" width="50" alt="link to project" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}