
import dashboard from '../assets/desgins/dashboard.png';
import chatSignup from '../assets/desgins/chat-signup.png';
import chatProfile from '../assets/desgins/chat-profile.png';
import chatHome from '../assets/desgins/chat-home.png';
import search from '../assets/desgins/search.png'
import portfolio from '../assets/desgins/portfolio.png'


const Designs = () => {

    return <section className="mt-20">
              <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Desgins</h1>

              <div className="w-full flex justify-center items-center flex-wrap gap-10 mt-10">

                <div className='size-[40%] border self-start'><img className='object-cover' src={dashboard}></img></div>
                <div className='size-[56%] border self-start'><img className='object-cover' src={chatSignup}></img></div>
                <div className='size-[20%] border self-start'><img className='object-cover' src={chatProfile}></img></div>
                <div className='size-[42%] border self-start'><img className='object-cover' src={search}></img></div>
                <div className='size-[20%] border self-start'><img className='object-cover' src={portfolio}></img></div>
                <div className='size-[80%] border self-start'><img className='object-cover' src={chatHome}></img></div>
              </div>

    </section>
}

export default Designs;