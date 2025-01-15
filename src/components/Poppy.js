import poppy from "../assets/poppy.mp3";

function Poppy() {
    const pop = new Audio(poppy);
     
    function toggle1() {
    if (pop.paused) {
        pop.play();
    } else {
        pop.pause();
    }};
    
    return (
    <div>
        <button onClick={toggle1}>Wahou?</button>
    </div>
    );
}

export default Poppy;