    let memoryArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
    let memoryValues = [];
    let memoryTileIDs = [];
    let tilesFlipped =0;

    Array.prototype.memoryTileShuffle = function(){
        let i = this.length;
        let j;
        let temp;
        while(--i > 0){
            j = Math.floor(Math.random() * (i+1));
            temp = this[j];
            this[j] = this[i];
            this[i]=temp;
        }
    }

    function newBoard (){
        tilesFlipped = 0;
        let output = "";
        memoryArray.memoryTileShuffle();
        for(let i=0; i<memoryArray.length; i++){
            output += "<div id=tile"+i+"onclick='memoryFlipTile(this, "+memoryArray[i]+")'></div>"
        }
        document.getElementById("container").innerHTML = output;
    }
