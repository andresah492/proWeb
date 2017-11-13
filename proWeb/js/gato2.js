/*turnos 0, 1 , 0 , 1*/
var turno = 1;
var nt =0;

function maquina() {
    //jugada1
    if(document.getElementById(8).classList.contains('disabled')&& nt==2){
        document.getElementById(2).classList.remove('btn-outline-dark');
        document.getElementById(2).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(2).classList.add('btn-outline-success');
        document.getElementById(2).classList.add('disabled');
        nt = nt +1;
        return;
    }
    else if(document.getElementById(6).classList.contains('disabled')&& document.getElementById(8).classList.contains('btn-outline-danger')&& nt ==5){
        document.getElementById(1).classList.remove('btn-outline-dark');
        document.getElementById(1).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(1).classList.add('btn-outline-success');
        document.getElementById(1).classList.add('disabled');
        hasWinner(0);
        return;
    }
    else if(document.getElementById(1).classList.contains('disabled')&& nt ==5){
        document.getElementById(6).classList.remove('btn-outline-dark');
        document.getElementById(6).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(6).classList.add('btn-outline-success');
        document.getElementById(6).classList.add('disabled');
        return;
    }
    else if(document.getElementById(3).classList.contains('disabled')&&nt==7&&document.getElementById(2).classList.contains('btn-outline-success')){
        document.getElementById(4).classList.remove('btn-outline-dark');
        document.getElementById(4).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(4).classList.add('btn-outline-success');
        document.getElementById(4).classList.add('disabled');
        hasWinner(0);
        return;
    }
    else if(document.getElementById(4).classList.contains('disabled')&&nt==7 && document.getElementById(2).classList.contains('btn-outline-success')){
        document.getElementById(3).classList.remove('btn-outline-dark');
        document.getElementById(3).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(3).classList.add('btn-outline-success');
        document.getElementById(3).classList.add('disabled');
        hasWinner(0);
        return;
    }
    //end jugada1



    //jugada2
    else if(document.getElementById(4).classList.contains('disabled')&&nt==2){
        document.getElementById(8).classList.remove('btn-outline-dark');
        document.getElementById(8).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(8).classList.add('btn-outline-success');
        document.getElementById(8).classList.add('disabled');
        hasWinner(0);
        return;
    }
    else if(document.getElementById(2).classList.contains('disabled')&&nt==5){
        document.getElementById(6).classList.remove('btn-outline-dark');
        document.getElementById(6).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(6).classList.add('btn-outline-success');
        document.getElementById(6).classList.add('disabled');
        hasWinner(0);
        return;
    }
    else if(document.getElementById(6).classList.contains('disabled')&& nt == 5){
        document.getElementById(2).classList.remove('btn-outline-dark');
        document.getElementById(2).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(2).classList.add('btn-outline-success');
        document.getElementById(2).classList.add('disabled');
        hasWinner(0);
        return;
    }
    else if(document.getElementById(7).classList.contains('disabled')&&nt==8){
        document.getElementById(3).classList.remove('btn-outline-dark');
        document.getElementById(3).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(3).classList.add('btn-outline-success');
        document.getElementById(3).classList.add('disabled');
        hasWinner(0);
        return;
    }
    else if(document.getElementById(3).classList.contains('disabled')&&nt==8){
        document.getElementById(7).classList.remove('btn-outline-dark');
        document.getElementById(7).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(7).classList.add('btn-outline-success');
        document.getElementById(7).classList.add('disabled');
        hasWinner(0);
        return;
    }
    else if(document.getElementById(1).classList.contains('disabled')&&nt==8){
        document.getElementById(5).classList.remove('btn-outline-dark');
        document.getElementById(5).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(5).classList.add('btn-outline-success');
        document.getElementById(5).classList.add('disabled');
        hasWinner(0);
        return;
    }
    else if(document.getElementById(5).classList.contains('disabled')&&nt==8){
        document.getElementById(1).classList.remove('btn-outline-dark');
        document.getElementById(1).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(1).classList.add('btn-outline-success');
        document.getElementById(1).classList.add('disabled');
        hasWinner(0);
        return;
    }
    //end jugada2

    //jugada3
    else if(document.getElementById(2).classList.contains('disabled')&&nt==2){
        console.log(nt+'nt');
        document.getElementById(8).classList.remove('btn-outline-dark');
        document.getElementById(8).innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
        document.getElementById(8).classList.add('btn-outline-success');
        document.getElementById(8).classList.add('disabled');
        hasWinner(0);
        return;
    }
}

function hasWinner(turno){
    var cont=0;
    var x=[];
    nt = nt +1;
    for(var i=0; i<3; i++){
        x[i] = [];
        for(var j=0; j<3; j++){
            //no ha sido usado aun
            if(document.getElementById(cont).classList.contains('btn-outline-dark')){
                x[i][j] = 0;
            }
            else if(document.getElementById(cont).classList.contains('btn-outline-success')){
                x[i][j] = 1;
            }
            else if(document.getElementById(cont).classList.contains('btn-outline-danger')){
                x[i][j] = 2;
            }
            console.log("["+i+"]["+j+"]="+ x[i][j]);
            cont++;
        }
    }
    var winner = 0; //0 no hay ganador
    if(x[0][0]==x[1][1] && x[0][0]==x[2][2]){
       if(x[0][0]!=0){
           winner = x[0][0];
           for (var w=0; w<9; w++){
               document.getElementById(w).classList.add('disabled');
               }
           return winner;
           }
       }
    else if(x[0][2]==x[1][1] && x[0][2]==x[2][0]){
        if(x[0][2]!=0){
            winner = x[0][2];
            for (var w=0; w<9; w++){
                document.getElementById(w).classList.add('disabled');
            }
            return winner;
        }
    }
    else {
        //columnas
        if(x[0][0]==x[1][0] && x[0][0]==x[2][0]){
            if(x[0][0]!=0){
                winner= x[0][0];
                for (var w=0; w<9; w++){
                    document.getElementById(w).classList.add('disabled');
                }
                return winner;
            }
        }
        if(x[0][1]==x[1][1] && x[0][1]==x[2][1]){
            if(x[0][1]!=0){
                winner= x[0][1];
                for (var w=0; w<9; w++){
                    document.getElementById(w).classList.add('disabled');
                }
                return winner;
            }
        }
        if(x[0][2]==x[1][2] && x[0][2]==x[2][2]){
            if(x[0][2]!=0){
                winner= x[0][2];
                for (var w=0; w<9; w++){
                    document.getElementById(w).classList.add('disabled');
                }
                return winner;
            }
        }
        //filas
        if(x[0][0]==x[0][1] && x[0][0]==x[0][2]){
            if(x[0][0]!=0){
                winner= x[0][0];
                for (var w=0; w<9; w++){
                    document.getElementById(w).classList.add('disabled');
                }
                return winner;
            }
        }
        if(x[1][0]==x[1][1] && x[1][0]==x[1][2]){
            if(x[1][0]!=0){
                winner= x[1][0];
                for (var w=0; w<9; w++){
                    document.getElementById(w).classList.add('disabled');
                }
                return winner;
            }
        }
        if(x[2][0]==x[2][1] && x[2][0]==x[2][2]){
            if(x[2][0]!=0){
                winner= x[2][0];
                for (var w=0; w<9; w++){
                    document.getElementById(w).classList.add('disabled');
                }
                return winner;
            }
        }
    }
    if(winner!=0){
        return winner;
    }
    return

}

function evaluar(me){
    //console.log(me);
    //console.log(me.id);
    nt = nt+1;
    var id=me.id;
    /*console.log(id);*/
    /*console.log(me.innerHTML);*/
    /*console.log(me.classList);*/
    if(!me.classList.contains('disabled')) {
        me.classList.remove('btn-outline-dark');

        switch (turno) {
            case 0:
                me.innerHTML = "<i class='fa fa-check-circle fa-4x' aria-hidden='true'></i>";
                me.classList.add('btn-outline-success');

                break;
            case 1:
                me.innerHTML = "<i class='fa fa-cog fa-4x' aria-hidden='true'></i>";
                me.classList.add('btn-outline-danger');
                break;
        }
        me.classList.add('disabled');

        console.log('turno'+turno);
         var xxxx = hasWinner(turno);
        turno = (turno + 1) % 2;
        if (turno==0){
            maquina();
            turno=1;
        }
         console.log('ahahha:  '+xxxx+' turno: '+turno);
    }
}
