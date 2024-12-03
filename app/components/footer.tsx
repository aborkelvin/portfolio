
function Footer() {
    
    return (
        <footer className="bg-[#1c1c1c] py-20 flex flex-col md:flex-row gap-14 items-center justify-between  text-[#bfc3ca] px-10 lg:px-80" >

            <p className=" text-lg lg:text-xl xl:text-2xl font-medium " >
                © Anthony 2024
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-between ">
                <a href="https://x.com/kel_savio" target="_blank">
                    <span className=" text-lg lg:text-xl xl:text-2xl text-center " >
                        Twitter
                    </span>
                </a>
                <a href="https://github.com/aborkelvin" target="_blank">
                    <span className=" text-lg lg:text-xl xl:text-2xl text-center ">
                        Github
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/anthony-abor/" target="_blank">
                    <span className=" text-lg lg:text-xl xl:text-2xl text-center " >
                        LinkedIn
                    </span>
                </a>
            </div>
        </footer>
    )
}

export default Footer;