<?php
require './includes/config/db.php';

$db = connectDB();
//explorer
$query = "SELECT * FROM exploring";
$result = mysqli_query($db, $query);
// folder
$folders = mysqli_query($db, $query);
// Desktop
$desktop = mysqli_query($db, $query);
// Documents
$documents = mysqli_query($db, $query);
// Downloads
$downloads = mysqli_query($db, $query);
// Music
$music = mysqli_query($db, $query);
// Pictures
$pictures = mysqli_query($db, $query);
// Videos
$videos = mysqli_query($db, $query);
// music mp3
$music_mp3 = mysqli_query($db, $query);
?>

<div id="explorer" data-id="1" class="explorer">
    <div class="container_explorer">
        <div class="description_close">
            <div class="description">
                <img src="../../src/img/explorer/pc.svg" alt="computer">
                <img src="../../src/img/explorer/document_view.svg" alt="views">
                <img src="../../src/img/explorer/document.svg" alt="document">
            </div>
            <div class="mmc">
                <img class="minimize" src="src/img/pro/minimize.svg" alt="minimize">
                <img class="maximize" src="src/img/pro/maximize.svg" alt="maximize">
                <img class="close" src="src/img/pro/close.svg" alt="close">
            </div>
        </div>
        <div class="menu_manage">
            <ul class="menu_help">
                <li>File</li>
                <li>Computer</li>
                <li>View</li>
            </ul>
            <div class="row_help">
                <img src="../../src/img/explorer/down.svg" alt="row">
                <img src="../../src/img/explorer/help.svg" alt="help">
            </div>
        </div>
        <div class="input_explorer">
            <div class="arrows">
                <img src="../../src/img/explorer/arrow_right.svg" alt="right">
                <img src="../../src/img/explorer/arrow_left.svg" alt="left">
            </div>
            <div class="pc_information">
                <input type="text" placeholder="This Pc" spellcheck="false">

                <div class="arrow_refresh">
                    <img src="../../src/img/explorer/down.svg" alt="down">
                    <img src="../../src/img/explorer/refresh.svg" alt="refresh">
                </div>
            </div>
            <div class="search_chendo">
                <input type="search" placeholder="Search" spellcheck="false">
            </div>
        </div>
        <ul id="this_pc">
            <li class="cont_pc">
                <div class="mipc">
                    <img src="../../src/img/explorer/pc.svg" alt="pc">
                    <span>Chendo</span>
                </div>
                <ul class="routes_pc">
                    <?php while($explorer = mysqli_fetch_assoc($result)): ?>
                        <li class="<?php echo $explorer['explorer'] ?>" id="<?php echo $explorer['id'] ?>">
                            <img src="../../src/img/explorer/<?php echo $explorer['explorer']; ?>.svg" alt="<?php echo $explorer['explorer'] ?>">
                            <span><?php echo $explorer['explorer_name']; ?></span>
                        </li>
                    <?php endwhile; ?>    
                </ul>
            </li>
            <div class="container_pc">
                <span>Folder</span>
                <div id="thispc">
                    <?php while($folder = mysqli_fetch_assoc($folders)): 
                        if($folder['id'] != 7 && $folder['id'] != 8) {
                    ?>
                        <div class="folder_pc">
                            <img src="../../src/img/explorer/folder/<?php echo $folder['explorer_folder']; ?>.svg" alt="">
                            <span><?php echo $folder['explorer_name']; ?></span>
                        </div>
                    <?php   
                    }       
                    ?>         
                    <?php endwhile; ?>  
                </div>       
                <div id="desktop" data-id="1">
                    <?php while($desk = mysqli_fetch_assoc($desktop)): 
                        if($desk['id'] != 7 && $desk['id'] != 8) {
                    ?>
                    <div class="align_items">
                        <img src="../../src/img/explorer/folder/default.svg" alt="<?php echo $desk['desktop']; ?>">
                        <span><?php echo $desk['desktop']; ?></span>
                    </div>
                    <?php   
                    }       
                    ?>         
                    <?php endwhile; ?>
                </div>
                <div id="documents" data-id="2">
                    <?php while($doc = mysqli_fetch_assoc($documents)): 
                        if($doc['id'] != 6 && $doc['id'] != 7 && $doc['id'] != 8) {
                    ?>
                    <div class="align_items">
                        <img src="../../src/img/explorer/folder/default.svg" alt="<?php echo $doc['documents']; ?>">
                        <span><?php echo $doc['documents']; ?></span>
                    </div>
                    <?php   
                    }       
                    ?>         
                    <?php endwhile; ?>
                </div>
                <div id="downloads" data-id="3">
                    <?php while($down = mysqli_fetch_assoc($downloads)): 
                        if($down['id'] != 4 && $down['id'] != 5 && $down['id'] != 6 && $down['id'] != 7 && $down['id'] != 8) {
                    ?>
                    <div class="align_items">
                        <img src="../../src/img/explorer/folder/default.svg" alt="<?php echo $down['downloads']; ?>">
                        <span><?php echo $down['downloads']; ?></span>
                    </div>
                    <?php   
                    }       
                    ?>         
                    <?php endwhile; ?>
                </div>
                <div id="music" data-id="4">
                    <?php while($mus = mysqli_fetch_assoc($music)): 
                        if($mus['id'] != 7 && $mus['id'] != 8) {
                    ?>
                    <div class="align_items" data-id="<?php echo $mus['id'] ?>">
                        <img src="../../src/img/explorer/doc_music.svg" alt="<?php echo $mus['music']; ?>">
                        <span><?php echo $mus['music']; ?></span>
                        <audio data-id="<?php echo $mus['id'] ?>">
                            <source src="../../src/audioseven/audio/<?php echo $mus['music_mp3']; ?>.mp3">
                        </audio>
                    </div>
                    <?php   
                    }       
                    ?>         
                    <?php endwhile; ?>
                </div>
                <div id="pictures" data-id="5">
                    <?php while($pic = mysqli_fetch_assoc($pictures)): 
                        if($pic['id'] != 7 && $pic['id'] != 8) {
                    ?>
                    <div class="align_items">
                        <img src="../../src/img/explorer/doc_img.svg" alt="<?php echo $pic['pictures']; ?>">
                        <span data-id="<?php echo $pic['id']; ?>"><?php echo $pic['pictures']; ?></span>
                    </div>
                    <?php   
                    }       
                    ?>         
                    <?php endwhile; ?>
                </div>
                <div id="videos" data-id="6">
                    <?php while($video = mysqli_fetch_assoc($videos)): 
                        if($video['id'] != 3 && $video['id'] != 4 && $video['id'] != 5 && $video['id'] != 6 && $video['id'] != 7 && $video['id'] != 8) {
                    ?>
                    <div class="align_items">
                        <img src="../../src/img/explorer/doc_video.svg" alt="<?php echo $video['videos']; ?>">
                        <span><?php echo $video['videos']; ?></span>
                    </div>
                    <?php   
                    }       
                    ?>         
                    <?php endwhile; ?>
                </div>
                
            </div>
        </ul>
        <div class="items_explorer">
            9 items
        </div>

    </div>
</div>