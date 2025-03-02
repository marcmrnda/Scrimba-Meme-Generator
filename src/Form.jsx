import Memes from './assets/memeimg.png'
const Form = () => {
    return (
        <>
        <section className="flex flex-col justify-center items-center gap-10 mt-10 w-full">
            <article className="flex justify-evenly gap-25">
            <div className="flex flex-col justify-center w-60">
            <label htmlFor="topText" className="font-karla font-medium">Top text</label>
            <input className="border-[.82px] border-[#D1D5DB] py-[7.37px] px-[10.64px] rounded-[4.91px] w-60" type="text" name="topText" id="topText" placeholder="meme"/>
            </div>
            <div className="flex flex-col justify-center w-60">
            <label htmlFor="bottomText" className="font-karla font-medium">Bottom text</label>
            <input className="border-[.82px] border-[#D1D5DB] py-[7.37px] px-[10.64px] rounded-[4.91px] w-60" type="text" name="bottomText" id="bottomText" placeholder="mema" />
            </div>
            </article>
            <button type="button" className="bg-anotherViolet w-145 h-13.5 font-karla text-white font-bold align-middle rounded-lg text-lg hover:bg-purple-200 hover:text-anotherViolet cursor-pointer">Get a new meme image  &#128511;</button>
            
            <article className='flex flex-col gap-45 items-center z-10 '>
            <img className="w-145 max-w-145" src={Memes} alt="memePhoto"/>
            <div className='absolute flex flex-col items-center gap-50'>
            <span className='font-impact text-white text-5xl text-outline mt-3'>SHUT UP</span>
            <span className='font-impact text-white text-5xl text-outline '>AND TAKE MY MONEY</span>
            </div>
            
            </article>
        </section>
        </>
    )
}

export default Form