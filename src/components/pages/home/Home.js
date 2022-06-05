import {useState} from "react";
import "./App.css";

// const Home = () => <h1>Hello from the home page</h1>

function Home() {
    // SETS OUR TOGGLED STATE TO 1 AS DEFAULT
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        // SETS OUR STATE TO THE SELECTED TAB INDEX
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button 
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>
                    My Events
                </button>
                <button 
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>
                    My Invites
                </button>
                <button 
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}>
                    Create Event
                </button>
            </div>
            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2>My Events</h2>
                    <hr />
                    <p>
                        TODO: We can nest our events menu here
                    </p>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2>My Invites</h2>
                    <hr />
                    <p>
                        TODO: Nest our Invites menu here
                    </p>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2>Create Event</h2>
                    <hr />
                    <p>
                        TODO: Nest our Create Event menu here
                    </p>
                </div>
            </div>
        </div>
    )



}


export default Home