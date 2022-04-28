<div id="container">
    <div class="mmc">
        <img class="close" src="src/img/pro/close.svg" alt="close">
    </div>
    <div class="contenedor_audio">
        <div class="description_audioseven">
            <div class="img_album"></div>
            <marquee 
            behavior="scroll" 
            direction="left" 
            width="100%" 
            bahaviur="alternate" 
            align="middle" 
            scrolldelay="5" 
            scrollamount="4" 
            loop="infinite" 
            hspace="10px" 
            vspace="5px"
            >
                <p class="music_text">Add a Song</p>
            </marquee>
            <audio></audio>
        </div>
    </div>
    <div id="play">
        <img src="src/audioseven/img/play.svg" alt="play">  
    </div>
    <div class="volumen">
        <input 
        type="range" 
        name="volumen" 
        id="volumen" 
        min="0" 
        max="1" 
        step="0.01" 
        value="0.7"
        > 
    </div>
</div>