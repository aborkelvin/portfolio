import Image from "next/image";

function Project(props: any) {
    
    return (
        <div className="w-full h-[385px]  max-w-[90%] mx-auto bg-[#1f1f1f] flex flex-col md:flex-row py-5 px-[30px] rounded-3xl " >
            <div className="flex-1 text-white flex flex-col justify-between  ">
                <div className="">
                    <Image src="/jotie.svg" width={70} height={70} alt="Project" className="rounded-lg w-[70px] mb-[20px] object-cover " />
                    <h4 className="font-bold text-white text-[28px] mb-[10px] " >
                        Jotie - Notes & Tasks
                    </h4>
                    <p className="" >
                        A simple and intuitive note-taking app that helps you stay organized and manage your tasks efficiently.
                        Developed using Flutter, this app offers extensive customization options and robust functionality,
                        embodying my personal innovation at Appceiv.
                    </p>
                </div>

                <button className="flex gap-2 " >
                    <span>Visit Site</span>
                    <img src="/arrowright.svg" alt="Right arrow" className="w-5 h-5 " />
                </button>

            </div>
            <div className="flex-1">
                <img src={props.image} alt="Project" className="rounded-lg mb-[20px] w-full h-full  " />
            </div>
        </div>
    );
}

export default Project;