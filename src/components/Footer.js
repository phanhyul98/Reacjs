import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subcription'>
            <p className='footer-subcription-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='inut-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your email' className='footer-input'/>
                    <Button buttonStyle='btn-outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='sign-up'>How it works</Link>
                    <Link to='/'>Testionials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='sign-up'>How it works</Link>
                    <Link to='/'>Testionials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='sign-up'>How it works</Link>
                    <Link to='/'>Testionials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='sign-up'>How it works</Link>
                    <Link to='/'>Testionials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        TRVL <i className='fab fa-typo3' />
                    </Link>
                </div>
                <small className='website-rights'>TRVL 2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                        <i className='fab fa-facebook' />
                    </Link>
                    <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer