import React from 'react'
import './Components.css'
import Model from '../Images/model.jpg'

const Blog = () => {
  return (
    <div className="blog_container grid sm:grid-cols-12 text-white p-12 mx-[10rem] rounded-xl">
      <div className="blog_left col-span-4 p-5 flex flex-col items-center text-center">
        <img src={Model} alt="Founder" className='h-[20vh] rounded-md'/>
        <span className='mt-2 text-xl'>CEO - Founder</span>
        <span className='text-xl'>Kamal Singh Rawat</span>
        <p className='mt-4 text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, odit esse molestiae modi error quaerat reiciendis corporis harum debitis possimus.</p>
      </div>
      <div className="blog_right text-base col-span-8 p-5">
        <h2 className='text-4xl text-center'>Mission & Vission</h2>
        <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, in, aspernatur laboriosam nisi libero nam nulla iusto ratione ipsam sed necessitatibus quod fugit tenetur nihil omnis quas quo blanditiis, reiciendis beatae. Amet, nulla, quos alias dolore aut explicabo deleniti, dolor voluptatum eos libero recusandae sed doloremque ipsam quasi maxime esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, in maxime. Nisi dolores assumenda quia magnam iusto harum vel explicabo maiores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem corrupti similique commodi! Quam aperiam ipsum facere quae velit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, assumenda unde numquam repellat voluptatum id neque, consequatur, aspernatur accusamus veritatis ut fugiat vitae. Ipsum, fuga!</p>
      </div>
    </div>
  )
}

export default Blog
