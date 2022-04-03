import React from 'react';

const Home = () => {
    return (
        <div >
        <div className='flex'>
            <img className='w-96 mx-48 mt-28' src="https://i.ibb.co/HqxR5vk/bat.jpg" alt="" />
            <div className='mt-52'>
            <h2 className='text-9xl hover:text-orange-300'>The Best Place</h2>
            <h2 className='text-4xl mt-10'>To buy your next <span className='underline text-rose-600 uppercase text-5xl hover:text-orange-300'>favourite</span> Bat</h2>
            <p className='mt-10 mr-24 text-orange-900 hover:text-red-400'>A cricket bat is a special bit of kit used by batters to smash the ball in the sport of cricket. A cricket bat is a special bit of kit used by batters to smash the ball in the sport of cricket. It normally consists of a cane handle coupled to a flat-fronted willow-wood blade. A hitter who is making ground can also utilize it to avoid a run out by gripping the bat and tapping the ground with it.</p>
            <a href="https://youtu.be/EN4tiVoKew4"><button class="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full mt-10">Preview</button></a> 
            </div>
        </div>
        </div>
    );
};

export default Home;