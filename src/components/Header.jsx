import Quizlogo from '../assets/images.png'

export default function Header(){
    return(
    <header >
    {/* <img className="h-auto w-auto mx-auto pb-10"src={Quizlogo} /> */}
    <h1 className='text-blue-600 uppercase font-bold text-4xl pl-4 mt-4 ml-[750px] mb-[170px]'>Quiz App </h1>
    </header>
    )
}