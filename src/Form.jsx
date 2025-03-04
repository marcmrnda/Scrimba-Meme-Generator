
const Form = ({meme,change,random}) => {
        const {topText,bottomText,photoMeme} = meme
    return (
        <>
        <section className="flex flex-col justify-center items-center gap-10 mt-10 w-full">
            <article className="flex justify-evenly gap-25">
            <div className="flex flex-col justify-center w-60">
            <label htmlFor="topText" className="font-karla font-medium">Top text</label>
            <input onChange={change} className="border-[.82px] border-[#D1D5DB] py-[7.37px] px-[10.64px] rounded-[4.91px] w-60" type="text" name="topText" id="topText" value={topText} placeholder={topText}/>
            </div>
            <div className="flex flex-col justify-center w-60">
            <label htmlFor="bottomText" className="font-karla font-medium">Bottom text</label>
            <input className="border-[.82px] border-[#D1D5DB] py-[7.37px] px-[10.64px] rounded-[4.91px] w-60" type="text" name="bottomText" id="bottomText" placeholder={bottomText} value={bottomText} onChange={change} />
            </div>
            </article>
            <button type="button" onClick={random} className="bg-anotherViolet w-145 h-13.5 font-karla text-white font-bold align-middle rounded-lg text-lg hover:bg-purple-200 hover:text-anotherViolet cursor-pointer">Get a new meme image  &#128511;</button>
            
            <article className='relative flex flex-col justify-center items-center '>
            <img className="max-w-full h-auto rounded-sm" src={photoMeme} alt="memePhoto"/>
            <span className='absolute px-[5px] font-impact text-white text-5xl text-outline top-0 mt-1'>{topText}</span>
            <span className='absolute px-[5px] font-impact text-white text-5xl text-outline bottom-0 mb-1'>{bottomText}</span>            
            </article>
        </section>
        </>
    )
}

export default Form