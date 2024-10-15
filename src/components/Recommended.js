import c1 from "../assets/images/c1.jpeg"
import c2 from "../assets/images/c2.jpeg"
import c3 from "../assets/images/c3.jpeg"
import c4 from "../assets/images/c4.jpeg"



function Recommended() {
    return (
        <div class="recommended">
            <h1 class="rocommended__title">Recommended For You</h1>
            <p>Pick the best fit</p>

            <div class="recommended__container">

                <div class="course-card">
                    <img src={c1} alt=""></img>
                    <h3>2024 Python Data Visaulisation Masterclass</h3>
                    <p>Col Steele</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={c2} alt=""></img>
                    <h3>Web Development Bootcamp 2024 | Advance</h3>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={c3} alt=""></img>
                    <h3>Master UI/UX Designing With Figma</h3>
                    <p>Col Steele</p>
                    <p>3.9 ⭐⭐⭐</p>
                    <p>949 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={c4} alt=""></img>
                    <h3>Basic to Advance Java Core Training</h3>
                    <p>Col Steele</p>
                    <p>4.5 ⭐⭐⭐⭐</p>
                    <p>999 <del>1999</del></p>
                </div>

            </div>

        </div>

    )
}

export default Recommended