import Saleimage1 from "../assets/images/Sale-image.jpeg"

function Saleimage() {
    return (
        <div class="sale-image">
            <img src={Saleimage1} alt=""></img>
            <div class="sale-image__offer">
                <h2>Udemy Flash Sale! 24 hours to save</h2>
                <p>Get the top courses for just 499. Just one day to save but a lifetime to learn</p>
            </div>
        </div>
    )
}

export default Saleimage