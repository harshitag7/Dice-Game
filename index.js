
var random1 = Math.floor(Math.random()* 6) + 1;
var random2 = Math.floor(Math.random()* 6) + 1;
console.log("random1 : " + random1);
console.log("random2 : " + random2);

if(random1 > random2){
    document.querySelector("h1").textContent = "Player 1 Wins !";
    if(random1 == 1) document.querySelector(".grid1 .item5").classList.add("white");
    if(random1 == 2){
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
    }
    if(random1 == 3){
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item5").classList.add("white");
    }

    if(random1 == 4){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
    }

    if(random1 == 5){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
        document.querySelector(".grid1 .item5").classList.add("white");
    }

    if(random1 == 6){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
        document.querySelector(".grid1 .item4").classList.add("white");
        document.querySelector(".grid1 .item6").classList.add("white");
    }


    if(random2 == 1) document.querySelector(".grid2 .item5").classList.add("white");
    if(random2 == 2){
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
    }
    if(random2 == 3){
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item5").classList.add("white");
    }

    if(random2 == 4){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
    }

    if(random2 == 5){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
        document.querySelector(".grid2 .item5").classList.add("white");
    }

    if(random2 == 6){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
        document.querySelector(".grid2 .item4").classList.add("white");
        document.querySelector(".grid2 .item6").classList.add("white");
    }

}else if(random1 < random2){
    document.querySelector("h1").textContent = "Player 2 Wins !";

    if(random1 == 1) document.querySelector(".grid1 .item5").classList.add("white");
    if(random1 == 2){
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
    }
    if(random1 == 3){
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item5").classList.add("white");
    }

    if(random1 == 4){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
    }

    if(random1 == 5){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
        document.querySelector(".grid1 .item5").classList.add("white");
    }

    if(random1 == 6){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
        document.querySelector(".grid1 .item4").classList.add("white");
        document.querySelector(".grid1 .item6").classList.add("white");
    }


    if(random2 == 1) document.querySelector(".grid2 .item5").classList.add("white");
    if(random2 == 2){
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
    }
    if(random2 == 3){
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item5").classList.add("white");
    }

    if(random2 == 4){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
    }

    if(random2 == 5){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
        document.querySelector(".grid2 .item5").classList.add("white");
    }

    if(random2 == 6){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
        document.querySelector(".grid2 .item4").classList.add("white");
        document.querySelector(".grid2 .item6").classList.add("white");
    }

}else{
    document.querySelector("h1").textContent = "Draw !";


    if(random1 == 1) document.querySelector(".grid1 .item5").classList.add("white");
    if(random1 == 2){
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
    }
    if(random1 == 3){
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item5").classList.add("white");
    }

    if(random1 == 4){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
    }

    if(random1 == 5){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
        document.querySelector(".grid1 .item5").classList.add("white");
    }

    if(random1 == 6){
        document.querySelector(".grid1 .item1").classList.add("white");
        document.querySelector(".grid1 .item3").classList.add("white");
        document.querySelector(".grid1 .item7").classList.add("white");
        document.querySelector(".grid1 .item9").classList.add("white");
        document.querySelector(".grid1 .item4").classList.add("white");
        document.querySelector(".grid1 .item6").classList.add("white");
    }


    if(random2 == 1) document.querySelector(".grid2 .item5").classList.add("white");
    if(random2 == 2){
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
    }
    if(random2 == 3){
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item5").classList.add("white");
    }

    if(random2 == 4){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
    }

    if(random2 == 5){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
        document.querySelector(".grid2 .item5").classList.add("white");
    }

    if(random2 == 6){
        document.querySelector(".grid2 .item1").classList.add("white");
        document.querySelector(".grid2 .item3").classList.add("white");
        document.querySelector(".grid2 .item7").classList.add("white");
        document.querySelector(".grid2 .item9").classList.add("white");
        document.querySelector(".grid2 .item4").classList.add("white");
        document.querySelector(".grid2 .item6").classList.add("white");
    }


    // console.log(document.querySelector(".grid").classList);
    // document.querySelector(".grid1 ..item5").classList.add("white");
    // document.querySelector(".grid1 ..item5").style.backgroundColor = "white";
}