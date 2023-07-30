import React from 'react'

export default function About(props) {

  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1 className='my-3' style={{ textAlign:'center'}}>About Us</h1>
        <section className="container mt-5">
          <div className="row">
              <div className="col-lg-6">
                  <img src="" className="img-fluid rounded" alt=""/>
              </div>
              <div className="col-lg-6">
                  {/* <h2 className="mb-4">About Us</h2> */}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor libero in mi tincidunt aliquam. Ut et sapien ligula. Fusce interdum tellus velit, et dapibus tortor ullamcorper nec. Integer consectetur risus eu lectus euismod, nec hendrerit ipsum tristique.</p>
                  <p>Praesent tincidunt posuere felis, at egestas nunc tincidunt nec. Nulla vitae felis et velit pharetra condimentum nec ut quam. Fusce ac velit semper, tincidunt nisi in, tincidunt lectus.</p>
                  <p>Quisque nec neque in orci faucibus ultrices at nec justo. Duis feugiat suscipit fermentum. Sed id ligula sit amet odio convallis fermentum quis quis nulla. Mauris vehicula aliquet elit et elementum. Curabitur sagittis odio vel nulla lacinia, vitae scelerisque urna varius.</p>
              </div>
          </div>
        </section>
    </div>
    </>
  )
}
