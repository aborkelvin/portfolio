import Image from 'next/image'
import Project from './components/project'
import palbucks from "./public/palbucks.png"
//import talentsync from "./public/talentsync.png"
import talentsync from "../public/talentsync.png"
import MoreProject from './components/MoreProject'

export default function Home() {
  
  return (
    <main className="min-h-screen  bg-[#191919] ">
      
      {/* ********************** Header ******************* */}
      <header className='flex justify-between items-center w-full py-4 xphones:py-5 md:py-7 px-5 phones:px-7 xphones:px-10 lg:px-20 fixed z-10 bg-[#1c1c1c] ' >
        <h1 className='text-[#00ade7] font-black text-xl md:text-2xl ' >Anthony</h1>
        
        <nav className='hidden lg:block' >
          <ul className='flex gap-10 text-[#A7A7A7]  ' >
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>            
          </ul>
        </nav>
      </header>

      
      <div className='px-5 phones:px-7 xphones:px-10 md:px-20 lg:px-28 xl:px-[150px] md:py-[110px] pt-[100px] xphones:pt-[140px] md:pt-[200px]  ' >
        
        {/* ***************** Personal Information ******************* */}
        <div className="mb-10 phones:mb-[50px] xphones:mb-[70px] md:mb-[120px] lg:mb-[150px] xl:mb-[200px] pb-10 flex justify-between flex-col-reverse gap-7 md:gap-0 md:flex-row ">
          <div className="">
            <h2 className='text-[#c7c4c4] font-medium text-sm md:text-lg mb-2 md:mb-4' >
              Hi, my name is
            </h2>
            <h2 className='text-[#1679AB] font-black phones:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[80px] xl:leading-[70px] ' > {/* #1679AB */}
              Abor Anthony,
            </h2>
            <h3 className='mb-3 md:mb-5 text-[#bfc3ca] phones:text-[20px] md:text-[30px] lg:text-[50px] xl:text-[70px] font-black ' >Software Developer</h3>
            <p className='mb-5 md:mb-[30px] text-[#c7c4c4] max-w-[720px] leading-7 text-sm md:text-base ' >
              {/* I can help you create a product, develop a feature, or build a website. Explore my work and experience! If you're interested and need assistance with a project, I am available for hire. */}
              I have the expertise to help you create a product, develop a specific feature, or build an entire website from scratch.
              Explore my portfolio to see my work and to learn more about my experience.
              If you find my skills and background align with your needs and you require assistance on a project, I am readily available for hire.
            </p>
            <div className='flex gap-4' >
              <button className='py-3 px-4 md:px-6 bg-inherit hover:bg-[rgb(55,177,218,0.3)] border-[1.5px] border-[#37b1da] text-[#37b1da] rounded font-medium text-sm md:text-lg ' >
                See my resume
              </button>
              <button className='py-3 px-4 md:px-6 bg-inherit hover:bg-[rgb(55,177,218,0.3)] border-[1.5px] border-[#37b1da] text-[#37b1da] rounded font-medium text-sm md:text-lg ' >
                Get in touch
              </button>
            </div>
          </div>
          <div className=' mx-auto md:ml-10' >
            <Image
              src='/anthony.jpg'
              width={400}
              height={400}
              alt='Anthony'
              className='rounded-full  '
            />
          </div>
        </div>

        {/* ***************** About ******************* */}
        <div className='text-[#8d9a9c] max-w-[880px] pb-7 md:pb-10 ' >
          <div className="flex gap-3 ">
            <h3 className='text-[#bfc3ca] text-2xl md:text-3xl font-semibold mb-4 md:mb-6 ' >
              About Me
            </h3>
            {/* <hr className='w-[10%] bg-[#424141] relative top-4 '  /> */}
          </div>
          <p className='text-sm md:text-base leading-8'>
            Hello, I’m Abor Anthony, a passionate and dedicated web developer with a strong background in creating dynamic and responsive '
            websites and applications. With several years of experience in the industry,
            I special ize in front-end development but also have a solid understanding of back-end technologies.
          </p>

          <div className="flex gap-3 ">
            <h3 className='text-[#bfc3ca] text-lg md:text-xl font-semibold mb-2 mt-3 ' >
              My Skills
            </h3>            
          </div>
          <ul className='list-square pl-8 leading-8 text-sm md:text-base ' >
            <li>Front-End: HTML, CSS, JavaScript, React </li>
            <li>Back-End: Node.js, Express, MongoDB </li>
            <li>Tools: Git, Webpack, Docker </li>
          </ul>

          <div className="flex gap-3 ">
            <h3 className='text-[#bfc3ca] text-lg md:text-xl font-semibold mb-2 mt-3 ' >
              Work Experience
            </h3>            
          </div>
          <ul className='list-square pl-8 flex flex-col gap-2 ' >
            <li><span className="text-sm md:text-base font-bold">Web Developer at XYZ Company (2019-Present):</span> Led the development of several key projects, including a customer portal and an internal tool for project management. </li>
            <li><span className="text-sm md:text-base font-bold">Front-End Developer at ABC Agency (2017-2019):</span> Worked on various client projects, delivering high-quality websites and applications that met clients' needs and exceeded their expectations.</li>
          </ul>

          <div className="flex gap-3 ">
            <h3 className='text-[#bfc3ca] text-lg md:text-xl font-semibold mb-2 mt-3 ' >
              Education
            </h3>            
          </div>
          <ul className='list-square pl-8 leading-8' >
            <li><span className="text-sm md:text-base font-bold">B.Eng in Electronic and Computer Engineering, University of Nigeria, Nsukka (2018-2024): </span>Graduated with honors, specializing in web development and software engineering.</li>
          </ul>          
        </div>

        {/* ***************** Projects ******************* */}
        <div className='py-7 md:py-10' >          
          <h3 className='text-[#bfc3ca] text-2xl md:text-3xl font-semibold mb-4 md:mb-6 ' >
            Projects
          </h3>
          <div className='py-5 flex flex-col gap-5 ' >
            <Project image={'/palbucks.png'} />
            <Project image={talentsync.src} />
            <Project image={'palbucks.png'} />            
          </div>
        </div>

        {/* *****************More Projects ******************* */}
        <div className='py-10' >
          <h3 className='text-[#bfc3ca] text-3xl font-semibold mb-6 ' >
            More Projects
          </h3>
          <div className="flex gap-5 flex-wrap ">
            <MoreProject />
            <MoreProject />
            <MoreProject />
          </div>
        </div>

        {/* ******************** Contact Me ******************** */}
        <div className='py-10' >
          <h3 className='text-[#bfc3ca] text-3xl font-semibold mb-6 ' >
            Contact Me
          </h3>
          <div>

            <form action="" className='flex flex-col gap-5 md:gap-6 border-[#0094c6] border-[1px] rounded px-5 py-8 mx-auto w-full max-w-[500px] ' >
              <div >
                <label htmlFor="name" className='text-[#bfc3ca] text-sm mb-1' >Name *</label>
                <input
                  type="text"
                  id='name'
                  placeholder='Full Name'
                  className='outline-none bg-[#2a2a2a] text-[#bfc3ca] w-full py-3 px-3 rounded-md text-sm'
                />
              </div>
              <div >
                <label htmlFor="email" className='text-[#bfc3ca] text-sm mb-1' >Email *</label>
                <input
                  type="email"
                  id='Email'
                  placeholder='Email adress'
                  className='outline-none bg-[#2a2a2a] text-[#bfc3ca] w-full py-3 px-3 rounded-md text-sm'
                />
              </div>
              <div >
                <label htmlFor="message" className='text-[#bfc3ca] text-sm mb-1' >Message *</label>
                <textarea                  
                  id='message'
                  placeholder='Type your message here...'
                  className='outline-none bg-[#2a2a2a] text-[#bfc3ca] w-full py-4 px-3 rounded-md text-sm'
                  rows={4}

                />
              </div>
              <button className='w-full border-[1px] border-[#0094c6] text-[#bfc3ca] py-2 rounded ' >
                Send
              </button>

              <p className='text-center text-[#bfc3ca] font-semibold' >OR</p>
              <div className="">
                <p className='text-[#bfc3ca] mb-1' > CALL: +234 803 6310 553 </p>
                <p className='text-[#bfc3ca]' >SAY HI: ABORKELVIN@GMAIL.COM </p>
              </div>
              {/* <div className='flex -mt-5 gap-8 items-center ' >
                <img src="/twitter.svg" alt="My twitter: x.com/kel_savio" className='w-10 h-10 cursor-pointer ' />
                <img src="/linkedin.svg" alt="My twitter: x.com/kel_savio" className='w-8 h-8 cursor-pointer ' />
                <img src="/github3.svg" alt="My twitter: x.com/kel_savio" className='w-8 h-8 ' />
              </div> */}
            </form>
          </div>

        </div>


      </div>

    </main>
    
  )
}
