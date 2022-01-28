class datos{

    constructor(){
        this.count_anomalies =0;
        this.count_no_anomalies =0;
        this.avg=0.0;
    }

    async  count(datos){
        let array =[];
    for (const iterator of datos) {
        array.push(Array.from(iterator));
    }
    let ratio =false;

    for(let y =0;y<array.length;y++)
    {
        for(let x=0;x<array[y].length-1;x++)
        {
            let posicion = array[y][x];
            console.log(posicion);
            let largo = array[0].length;
            if(y >= 0 && y < array.length && x >= 0 && x < largo){
                let agregar =1;

                if(x++ >= 0 && x-- < largo){
                    console.log(array[y][x-1]);
                    if (array[y][x-1] != undefined&&array[y][x-1] == array[y][x]){
                        agregar+=1;
                    }
                    console.log(array[y][x]);
                    console.log(array[y][x+1])
                    if (array[y][x+1] != undefined &&array[y][x+1] == array[y][x]){
                        agregar+=1;
                    }
                }
                if(y-1 >= 0 && y+1 < largo){
                    if (array[y-1] != undefined && array[y-1][x] == array[y][x]){
                        agregar+=1;
                    }
                    console.log(array[y-1][x]);
                    console.log(array[y][x]);
                    if (array[y+1] != undefined && array[y+1][x] == array[y][x]){
                        agregar+=1;
                    }
                    
                    console.log(array[y+1][x])
                }
                if(agregar > 2){
                    ratio =true;
                }
            }
        }
    }
    if(ratio)
    {
        return true;
    }
    else{
        return false;
    }

    }

    async verif(datos){
        return datos;
    }

}

module.exports = datos;