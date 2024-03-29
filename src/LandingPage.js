import react, {useState} from "react";

function LandingPage (){
    

    return (
        <div className="Landing_Page">
            <header>
                <h1> My Favorite Books and Websites</h1>
                <p> A glossary of some of the most influential books and websites in my learning journey</p>
            </header>
            <section className="Books">
                <h2> Books</h2>
                <button> Explore</button> 
            </section>
            <section className="Websites">
                <h2> Websites</h2>
                <button> Explore </button>
        
            </section>
2
            
            <footer>
                <p> &copy; 2024 MyReactBookApp. All rights reserved.</p>
            </footer>
        </div>
    );
}
export default LandingPage;