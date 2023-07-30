import React from 'react'


function Home(props) {
  return (
    <>
    {/* {`container-fluid text-${props.mode==='light'?'dark':'light'}`} */}
    <div className={`container-fluid text-${props.mode==='light'?'dark':'light'}`}>
      <header>
        <h1 className='my-4'>Welcome to Awesome Gaming Website!</h1>
      </header>
      <section>
        <h2>Featured Games</h2>
        {/* Add your list of featured games here */}
      </section>
      <section>
        <h2>Popular Games</h2>
        {/* Add your list of popular games here */}
      </section>
      <section>
        <h2>New Releases</h2>
        {/* Add your list of new releases here */}
      </section>
    </div>
    
    </>
  )
}

export default Home
