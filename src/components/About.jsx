import "../styles/About.css";
import { FaHtml5, FaCss3, FaPhp } from "react-icons/fa";
function About(){
    return(
        <>
            <section id="about">
                <div className="wrapper">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat provident libero.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore tenetur optio illum aliquid quaerat quas eaque hic et iure? Tenetur ratione error harum perspiciatis accusantium? Alias ad veritatis aspernatur.</p>
                    <h4>Programing Language & Tools</h4>
                    <div className="skills">
                        <FaHtml5 /><FaCss3 /><FaPhp />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;