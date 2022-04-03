import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-40'>
            <h2 className='underline text-4xl mt-20 text-red-500'>What is Context API?</h2>
            <p className='m-14'>We know in react that we have sent data from one component to another as prop. In a React application, data is sent top-down (from parent to child), which is known as prop drilling, however this can be inconvenient for certain sorts of props that are required by several components within an application. The context API is used to remove this or make data flow from one component to another easier. Context API is a new feature introduced in React 16.3 that allows you to easily pass data across the entire project where ever it is needed.</p>
            <h2 className='underline text-4xl mt-20 text-red-500'>What is Semantic Tag?</h2>
            <p className='m-14'>HTML was developed as a markup language to describe documents on the early internet. However, it proved difficult for developers to grasp the code for some complicated HTML webpages. Semantic tags were created to make the lives of developers easier. A semantic tag expresses its meaning unambiguously to both the browser and the developer. When html is written with semantic tags, both the developer and the browser can grasp the meaning of the code. Example of semantic tags are: article tag, header tag, footer tag, main tag, section tag etc.</p>
        </div>
    );
};

export default Blogs;