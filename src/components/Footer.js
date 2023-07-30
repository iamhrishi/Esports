import React from 'react'

export default function Footer(props) {
  return (
    <>
        <footer className={`footer bg-${props.mode} text-${props.mode==='light'?'dark':'light'} mt-5`}>
    <div className="container-fluid py-4">
        <div className="row">
            <div className="col-md-6">
                <h5>Contact Us</h5>
                <p>Email: info@example.com</p>
                <p>Phone: +1 123-456-7890</p>
            </div>
            <div className="col-md-6">
                <h5>Follow Us</h5>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/" className={`text-${props.mode==='light'?'dark':'light'}`}>Facebook</a></li>
                    <li className="list-inline-item"><a href="/" className={`text-${props.mode==='light'?'dark':'light'}`}>Twitter</a></li>
                    <li className="list-inline-item"><a href="/" className={`text-${props.mode==='light'?'dark':'light'}`}>Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-secondary text-center py-2">
        <p className="mb-0">&copy; {new Date().getFullYear()} Awesome Gaming Website. All rights reserved.</p>
    </div>
</footer>
    </>
  )
}
