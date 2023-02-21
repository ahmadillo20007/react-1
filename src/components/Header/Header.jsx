import search from '../../assets/img/search.png'
import shop from '../../assets/img/shopping_cart.png'
import group from '../../assets/img/group.png'
import tube from '../../assets/img/tube.png'
import cap from '../../assets/img/cap.png'
function Header() {
    return (
        <>
            <header className="main">
                <div className="container">
                    <ul className="main__list">
                        <a href="">
                            {" "}
                            <li className="main__list__item">Home</li>
                        </a>
                        <a href="">
                            {" "}
                            <li className="main__list__item">About</li>
                        </a>
                        <a href="">
                            {" "}
                            <li className="main__list__item">Blog</li>
                        </a>
                        <a href="">
                            {" "}
                            <li className="main__list__item">Contact</li>
                        </a>
                        <a href="">
                            {" "}
                            <li className="main__list__item">Courses</li>
                        </a>{" "}
                    </ul>
                    <div className="reg">
                        <div className="search">
                            <img src={search} alt="" />
                            <h6 className='reg__text'>
                                Search
                            </h6>
                        </div>
                        <div className="cart">
                            <img src={shop} alt="" />
                            <h6 className='reg__shop__text'>
                                Cart
                            </h6>
                        </div>
                        <a href="">
                            <button className="reg__btn">
                                <h6 className='reg__btn__text'>
                                    Sign Up

                                </h6>
                            </button>
                        </a>
                    </div>

                    <div className="hero">
                        <div className="about">
                            <h1 className='hero__text'>
                                Become an No-Code <br /> expert and find a job
                            </h1>
                            <p className='hero__item'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum <br /> vel molestie magna curabitur tincidunt nunc sit amet.
                            </p>
                <div className="buttons">
                <button className='hero__btn'>
                        <h5 className='hero__btn__item'>
                            Explore Courses
                        </h5>
                    </button>
<h5 className='buttons__text'>
Watch Video
</h5>
<img className='buttons__img' src={tube} alt="" />
                </div>
                        </div>
                        <div className="hero__img">
                            <img src={group} alt="" />
                            <img className='hero__cap' src={cap} alt="" />
                        </div>
                    </div>
                        <p className='hero__last__item'>Trusted by the world's best companies</p>
            


                </div>
            </header>

<div className="container">
<section className='premium'>
<button className="about__us">
    
<p className='about__us__item'>About us</p>
<h2 className='premium__text'>
    No-code Education Platform

</h2>
<p className='premium__item'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
</p>
</button>
</section>
</div>
        </>
    );
}
export default Header;

