<!------------------------------------------------------------------------------------

    Name: Windows 10 | chendo version
    Theme URI: @chendito
    Description: Windows 10 - Clone 70% | - Portfolio - Chendo
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

------------------------------------------------------------------------------------->
<?php
    $query = "SELECT * FROM applications";
    $result = mysqli_query($db, $query);
?>
<div id="taskbar_system_tray">

    <div class="taskbar">
        <?php
            include 'startmenu.php';
        ?>
    </div>
    <div id="taskband">
        <div class="applications">
            <?php while( $taskbar = mysqli_fetch_assoc($result) ): ?>
            <div class="icon_application">
                <ul>
                    <li>
                        <img class="absolute" src="../../src/img/previews/<?php echo $taskbar['tumb']; ?>.jpg" alt="<?php echo $taskbar['name']; ?>">
                        <a href="#" class="btn-show" data-id="<?php echo $taskbar['id']; ?>">
                            <img class="btn-show" src="../../src/img/pro/<?php echo $taskbar['imagen']; ?>.svg" alt="<?php echo $taskbar['name']; ?>">
                        </a>
                        <?php include 'taskbarExtended.php' ?>
                    </li>
                </ul>
            </div>
            <?php endwhile; ?>
        </div>
    </div>
    <div class="system_tray">
        <div class="systems">
            <div class="show_hidden_icons">
                <img class="show-icons" src="../../src/img/pro/showicons.svg" alt="show icons">
            </div>
            <img src="../../src/img/pro/red.svg" alt="red">
            <img src="../../src/img/pro/sound.svg" alt="red">
            <span>Esp</span>
            <span class="hour_ecuador"></span>
            <img src="../../src/img/pro/notify.svg" alt="Notifications">
        </div>
    </div>
</div>