//RedBox
let RedBox = document.getElementById('RedBox');
let RedBoxCount = 0;

//GreenBox
let GreenBox = document.getElementById('GreenBox');
let GreenBoxCount = 450;

//PinkBox
let PinkBox = document.getElementById('PinkBox');
let PinkBoxCountLeft = 450;
let PinkBoxCountTop = 0;

//BlueBox
let BlueBox = document.getElementById('BlueBox');
let BlueTop = 450;
let BlueLeft = 0;

//Button
let Button = document.getElementById("Button");


Button.addEventListener('click', (e) => {

    let Event = setInterval(Animation = () => {

        //RedBox inset increement
        RedBoxCount++;
        RedBox.style.inset = RedBoxCount + "px";
        // RedBox.innerText = RedBoxCount + "px";

        //GreenBox inset increement
        GreenBoxCount--;
        GreenBox.style.inset = GreenBoxCount + "px";
        // GreenBox.innerText = GreenBoxCount + "px";

        //PinkBox 
        PinkBoxCountLeft--;
        PinkBoxCountTop++;
        PinkBox.style.left = PinkBoxCountLeft + "px";
        PinkBox.style.top = PinkBoxCountTop + "px";
        // PinkBox.innerText = PinkBoxCountLeft + "px";

        //BlueBox
        BlueLeft++;
        BlueTop--;
        BlueBox.style.left = BlueLeft + "px";
        BlueBox.style.top = BlueTop + "px";
        // BlueBox.innerText = GreenBoxCount + "px";

        if (RedBoxCount == 450) {
            clearInterval(Event);

            RedBoxCount = 0;
            GreenBoxCount = 450
            PinkBoxCountLeft = 450;
            PinkBoxCountTop = 0;
            BlueLeft = 0;
            BlueTop = 450;



            console.log("450 .....");
        }


    }, 1)



})



