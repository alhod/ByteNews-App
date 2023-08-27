import "../styles.css"
import StartNowBtn from "../Components/StartNowBtn"
import NavBar from "../Navbar"

export default function Home() {
    return (
        <>
            <NavBar />

            <section className="content-left" id="home">
                <img src="../images/Blue Circle.png" className="bg-circle" 
                    style={{top: "-32rem", left: "-30rem", width: "1200px", height: "1200px"}}/>

                <img src="../images/Blue Circle.png" className="bg-circle" 
                    style={{top: "-32rem", left: "95rem", width: "1200px", height: "1200px"}}/>

                <img src="../images/Global News.png" className="globe"/>
                
                <h1 className="big-text">
                    Thousands of reputable<br/>
                    news sources. One app.
                </h1>

                <p className="small-text">
                    A free, user-friendly app that delivers
                    the most recent news from reputable sources,
                    with the ability to summarize articles into a single
                    paragraph.
                </p>

                <StartNowBtn>Start now</StartNowBtn>

                
            </section>
        </>
    )
}