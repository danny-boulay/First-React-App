import ReactPlayer from "react-player/youtube";

function MooDeng() {
    return(
        <div>
            <h2>This is a crazy video of Moo Deng the baby hippo</h2>
            <div id="moodeng">
                <ReactPlayer  
                    url='https://www.youtube.com/shorts/nriKimOy150' 
                    playing={true}
                />
            </div>
        </div>
    )
}

export default MooDeng;