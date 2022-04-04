import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {

    const [reviews] = useReviews();
    const sliced = reviews.slice(0,3);


    return (
        <div >
        <section className='flex'>
            <img className='w-96 mx-48 mt-28' src="https://i.ibb.co/HqxR5vk/bat.jpg" alt="" />
            <div className='mt-52'>
            <h2 className='text-9xl hover:text-orange-300'>The Best Place</h2>
            <h2 className='text-4xl mt-10'>To buy your next <span className='underline text-rose-600 uppercase text-5xl hover:text-orange-300'>favourite</span> Bat</h2>
            <p className='mt-10 mr-24 text-orange-900 hover:text-red-400'>A cricket bat is a special bit of kit used by batters to smash the ball in the sport of cricket. A cricket bat is a special bit of kit used by batters to smash the ball in the sport of cricket. It normally consists of a cane handle coupled to a flat-fronted willow-wood blade. A hitter who is making ground can also utilize it to avoid a run out by gripping the bat and tapping the ground with it.</p>
            <a href="https://youtu.be/EN4tiVoKew4"><button class="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full mt-10">Preview</button></a> 
            </div>
        </section>

        <section>
            <h2 className='mt-48 text-3xl'>Customer Review: {sliced.length}</h2>
            <div className='grid grid-cols-3 gap-4 ml-20 mr-20'>
            {
                sliced.map(slice => <Review
                key={slice.id}
                review={slice}></Review>)
            }
            </div>
            <Link to="/reviews"><button class="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full mt-10 mb-10">Preview</button></Link>
        </section>
        </div>
    );
};

export default Home;