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
        let tieneRadiacion =false;

        for(let y =0;y<array.length;y++)
        {
            for(let x=0;x<array[y].length;x++)
            {
                let posicion = array[y][x];
                let largo = array[0].length;
                if(y >= 0 && y < array.length && x >= 0 && x < largo){
                    let agregar =1;
                    let letra =array[y][x];

                    if(x+1 >= 0 && x-1 < largo){
                        if (array[y][x-1] != undefined&&array[y][x-1] == letra){
                            agregar+=1;
                        }
                        console.log(array[y][x+1])
                        if (array[y][x+1] != undefined &&array[y][x+1] == letra){
                            agregar+=1;
                        }
                    
                        if( y-1 >= 0 && y+1 < largo){
                            if (array[y-1] != undefined && array[y-1][x] == letra){
                                agregar+=1;
                            }
                            
                            if (array[y+1] != undefined && array[y+1][x] == letra){
                                agregar+=1;
                            }
                            if(array[y-1][x-1] == letra && array[y+1][x+1] == letra)
                            {
                                agregar+=2;
                            }
                            if(array[y+1][x-1] == letra && array[y-1][x+1] == letra)
                            {
                                agregar+=2;
                            }
                        }
                    }

                    if(agregar > 2){
                        tieneRadiacion =true;
                    }
                }
            }
        }
        if(tieneRadiacion)
        {
            return true;
        }
        else{
            return false;
        }
    }

    async ratio(objetosDeLaBDD){
        let varTrue =0;
        let varFalse=0;
        for(let object of objetosDeLaBDD){
            varTrue += parseInt(object["count_anomalies"]);
            varFalse += parseInt(object["count_no_anomalies"]);
        }
        let calculo= (varTrue+varFalse)/objetosDeLaBDD.length;
        let devolucion = {
            "count_anomalies":varTrue.toString(),
            "count_no_anomalies":varFalse.toString(),
            "ratio":calculo.toString(),
        }
        return devolucion;
    }

}

module.exports = datos;