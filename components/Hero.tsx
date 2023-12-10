'use client';
import Image from "next/image";
import CustomButton from "./CustomButton";
const  Hero = () => {
    const handlerScroll = () => {

    }
    return(
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find, book, or rent a car quickly</h1>
                <p className="hero__subtitle">
                    Streamline your car rental process with a simple, easy-to-use interface.
                </p>


                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-10"
                    handleClick={handlerScroll}

                />

            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero image"
                           fill className="object-contain" />
                </div>
                    <div className='hero__image-overlay'/>

            </div>
        </div>
    )
}

export default Hero;