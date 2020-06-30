// const title = <h1>'My First React elemet'</h1>;
// const desc = <p>'I just learned how to create a react node and render it in the dom.'</p>;

// const header = (

// <header>
//     <h1>{title}</h1>
//     <p>{desc}</p>
// </header>

// );

function Header() {
    return (
        <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
        </header>

    )
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                James
            </span>

            <Counter />
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            {/*Players list */}
            <Player />

        </div>
    )
}

const Counter = () => {
    return (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">25</span>
        <button className="counter-action increment"> + </button>
    </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);