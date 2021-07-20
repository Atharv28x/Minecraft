canvas = new fabric.Canvas("myCanvas")
block_IMG_width = 30;
block_IMG_height = 30;
player_X = 10;
player_Y = 10;
var player_object="";
var block_Image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_Image_object = Img;

        block_Image_object.scaleToWidth(block_IMG_width);
        block_Image_object.scaleToHeight(block_IMG_height);
        block_Image_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(block_Image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_IMG_width=block_IMG_width+10;
        block_IMG_height=block_IMG_height+10;
        document.getElementById("Current_width").innerHTML=block_IMG_width;
        document.getElementById("Current_height").innerHTML=block_IMG_height;
    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_IMG_width=block_IMG_width-10;
        block_IMG_height=block_IMG_height-10;
        document.getElementById("Current_width").innerHTML=block_IMG_width;
        document.getElementById("Current_height").innerHTML=block_IMG_height;
    }

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '87')
    {
        new_image('wall.jpg');
        console.log("w");
    }
    if(keyPressed == '71')
    {
        new_image('ground.png');
        console.log("g");
    }
    if(keyPressed == '76')
    {
        new_image('light_green.png');
        console.log("l");
    }
    if(keyPressed == '84')
    {
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keyPressed == '82')
    {
        new_image('roof.jpg');
        console.log("r");
    }
    if(keyPressed == '89')
    {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed == '68')
    {
        new_image('dark_green.png');
        console.log("d");
    }
    if(keyPressed == '85')
    {
        new_image('unique.png');
        console.log("u");
    }
    if(keyPressed == '67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }
}

function up()
{
    if(player_Y>=0)
    {
        player_Y=player_Y-block_IMG_height;
        console.log("block image height = "+block_IMG_height);
        console.log("When Up arrow key is pressed, X = "+player_X+", Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_Y<=500)
    {
        player_Y=player_Y+block_IMG_height;
        console.log("block image height = "+block_IMG_height);
        console.log("When Down arrow key is pressed, X = "+player_X+", Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_X>0)
    {
        player_X=player_X-block_IMG_width;
        console.log("block image width = "+block_IMG_width);
        console.log("When Left arrow key is pressed, X = "+player_X+", Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_X<=850)
    {
        player_X=player_X+block_IMG_width;
        console.log("block image width = "+block_IMG_width);
        console.log("When Right arrow key is pressed, X = "+player_X+", Y = "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}