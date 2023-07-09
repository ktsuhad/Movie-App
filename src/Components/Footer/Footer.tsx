import React from 'react'

const Footer = () => {
  return (
    <footer className="">
      <nav className='flex flex-col md:flex-row justify-evenly items-center md:items-start  py-16 text-white gap-10'>
        <div className="flex flex-col justify-evenly">
          <h1 className='text-white font-bold text-2xl'>Movie <span className='text-red-500'>App</span></h1>
            <button className="bg-white px-3 py-2 rounded-md text-[#01b4e4] text-base font-bold">Hi ktsuhad!</button>
        </div>

        <div>
          <h3 className='text-xl font-bold'>The Basics</h3>
          <ul className='text-base font-normal pt-1'>
            <li><a href="/about">About TMDB</a></li>
            <li><a href="/about/staying-in-touch">Contact Us</a></li>
            <li><a href="/talk">Support Forums</a></li>
              <li><a href="/login?to=read_me&amp;redirect_uri=/docs" target="_blank">API</a></li>
            <li><a href="https://status.themoviedb.org/" target="_blank" rel="noopener">System Status</a></li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-bold'>Get Involved</h3>
          <ul className='text-base font-normal pt-1'>
            <li><a href="/bible"><span className="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
            <li><a href="/movie/new">Add New Movie</a></li>
            <li><a href="/tv/new">Add New TV Show</a></li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-bold'>Community</h3>
          <ul className='text-base font-normal pt-1'>
            <li><a href="/documentation/community/guidelines">Guidelines</a></li>
            <li><a href="/discuss">Discussions</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className='text-xl font-bold'>Legal</h3>
          <ul className='text-base font-normal pt-1'>
            <li><a href="/documentation/website/terms-of-use">Terms of Use</a></li>
            <li><a href="/documentation/api/terms-of-use">API Terms of Use</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Footer