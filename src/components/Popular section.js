import popularc1 from "../assets/images/popularc1.jpeg"
import popularc2 from "../assets/images/popularc2.jpeg"
import popularc3 from "../assets/images/popularc3.jpeg"
import popularc4 from "../assets/images/popularc4.png"
import popularc5 from "../assets/images/popularc5.jpeg"
import popularc6 from "../assets/images/popularc6.jpeg"
import popularc7 from "../assets/images/popularc7.jpeg"
import popularc8 from "../assets/images/popularc8.jpeg"

function Popularsection() {
    return (
        <div class="popular">
            <h1 class="popular__title">Most Popular</h1>
            <p class="popular__subtitle">Pick the best fit</p>
            <div class="popular__container">

                <div class="course-card">
                    <img src={popularc1} alt=""></img>
                    <h3>2024 Python Data Visaulisation Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={popularc2} alt=""></img>
                    <h3> Web Development Bootcamp 2024 | Advance</h3>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={popularc3} alt=""></img>
                    <h3> Basic to Advance Java Core Training</h3>
                    <p>Col Steele</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>999 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={popularc4} alt=""></img>
                    <h3>Master UI/UX Designing With Figma</h3>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>949 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={popularc5} alt=""></img>
                    <h3>React - The Complete Guide 2024 (incl. Next.js, Redux)</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={popularc6} alt=""></img>
                    <h3>Android Java Masterclass - Become an App Developer</h3>
                    <p>Col Steele</p>
                    <p>4.2 ⭐⭐⭐⭐</p>
                    <p>549 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={popularc7} alt=""></img>
                    <h3>HTML and CSS for Beginners - Build a Website & Launch ONLINE</h3>
                    <p>Col Steele</p>
                    <p>4.2 ⭐⭐⭐⭐</p>
                    <p>599 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={popularc8} alt=""></img>
                    <h3>The Complete Angular Course: Beginner to Advanced</h3>
                    <p>Col Steele</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>999 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Popularsection