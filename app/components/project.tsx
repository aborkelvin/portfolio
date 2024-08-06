import Image from "next/image";

function Project(props: any) {
    
    return (
        <div className="w-full h-fit md:h-[385px] max-w-full md:max-w-[90%] mx-auto bg-[#1f1f1f] 
            flex flex-col-reverse md:gap-0 md:flex-row py-5 px-5 md:px-[30px] rounded-xl md:rounded-3xl "
        >
            <div className="flex-1 text-white flex flex-col justify-between gap-2 ">
                <div className="">
                    <Image src="/jotie.svg" width={70} height={70} alt="Project" className="hidden md:block rounded-lg w-[30px] md:w-10 lg:w-[70px] mb-[10px] md:mb-[20px] object-cover " />
                    <h4 className="font-bold text-white text-xl md:text-2xl lg:text-[28px] mb-[5px] md:mb-[10px] " >
                        Jotie - Notes & Tasks
                    </h4>
                    <p className="text-sm md:text-base" >
                        A simple and intuitive note-taking app that helps you stay organized and manage your tasks efficiently.
                        Developed using Flutter, this app offers extensive customization options and robust functionality,
                        embodying my personal innovation at Appceiv.
                    </p>
                </div>

                <button className="flex gap-2 text-sm md:text-base " >
                    <span>Visit Site</span>
                    <img src="/arrowright.svg" alt="Right arrow" className="w-5 h-5 " />
                </button>

            </div>
            <div className="flex-1">
                <img
                    src={props.image}
                    alt="Project"
                    className="rounded-md md:rounded-lg mb-[20px] w-full h-full  "
                />
            </div>
        </div>
    );
}

export default Project;