import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10'>
            <h2 className='text-4xl text-center font-bold pb-2 text-purple-700 '>Answer and Question</h2>
            <div>
                <h1 className='bg-indigo-200 p-2 rounded-lg text-2xl'>React pre-optimization techniques</h1>
                <p className='p-10'>
                    Before optimizing a React application, we must understand how React updates its UI and how to measure an app’s performance. This makes it easy to solve any React performance problems.
                </p>
            </div>
            <div>
                <h1 className='bg-indigo-200 p-2 rounded-lg text-2xl'>Q1 How will you improve the performance of a React Application?</h1>
                <p className='p-10'>
                    Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:

                    Keeping component state local where necessary
                    Memoizing React components to prevent unnecessary re-renders
                    Code-splitting in React using dynamic import()
                    Windowing or list virtualization in React
                    Lazy loading images in React
                </p>
            </div>
            <div>
                <h1 className='bg-indigo-200 p-2 rounded-lg text-2xl'>Q2 What are the different ways to manage a state in a React application?</h1>
                <p className='p-10'>
                    Local state.
                    Global state.
                    Server state.
                    URL state.
                </p>
            </div>
            <div>
                <h1 className='bg-indigo-200 p-2 rounded-lg text-2xl'>Q3 How does prototypical inheritance work?</h1>
                <p className='p-10'>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>
            </div>
            <div>
                <h1 className='bg-indigo-200 p-2 rounded-lg text-2xl'>Q4 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='p-10'>
                    In this task you should implement an imaginary shop’s bookkeping system in two different ways. The products of the shop are given in a Product struct array. In one product element, there exists the product’s name, price and the quantity of products in stock (see the header file for struct implementation). As said before, the accounting is done by an array of these Product elements. The last element of the array has a name whose first character is the terminating null character (\0). You should implement four functions:

                    (a) function write_binary which outputs a binary format file from given Product array with parameter name shop. Another parameter for this function is filename, the name of the desired output file. If the function succeeded, it should return 0, otherwise it should return 1.
                </p>
            </div>
            <div>
                <h1 className='bg-indigo-200 p-2 rounded-lg text-2xl'>Q5 What is a unit test? Why should write unit tests?</h1>
                <p className='p-10'>
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code,
                </p>
            </div>
        </div>
    );
};

export default Blogs;