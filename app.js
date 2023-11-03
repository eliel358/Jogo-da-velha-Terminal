// console.log(' x|x|x\n-------\n x|x|x\n-------\n x|x|x')
prompt = require('prompt-sync')()
places = ['x','x','x','x','o',' ',' ',' ','o']
end_game = () =>{
    //diagonal esquerda para direita
    
    if(places[0] =='o' && places[4] =='o' && places[8] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //diagonal direita para esquerda
    else if(places[2] =='o' && places[4] =='o' && places[6] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha de cima horizontal
    else if(places[0] =='o' && places[1] =='o' && places[2] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha do meio horizontal
    else if(places[3] =='o' && places[4] =='o' && places[5] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha de baixo horizontal
    else if(places[6] =='o' && places[7] =='o' && places[8] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha de cima vertical
    else if(places[0] =='o' && places[3] =='o' && places[6] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha do meio horizontal
    else if(places[1] =='o' && places[4] =='o' && places[7] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha de baixo horizontal
    else if(places[2] =='o' && places[5] =='o' && places[8] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    else if(places[0] =='x' && places[4] =='x' && places[8] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //diagonal direita para esquerda
    else if(places[2] =='x' && places[4] =='x' && places[6] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha de cima horizontal
    else if(places[0] =='x' && places[1] =='x' && places[2] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha do meio horizontal
    else if(places[3] =='x' && places[4] =='x' && places[5] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha de baixo horizontal
    else if(places[6] =='x' && places[7] =='x' && places[8] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha de cima vertical
    else if(places[0] =='x' && places[3] =='x' && places[6] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha do meio horizontal
    else if(places[1] =='x' && places[4] =='x' && places[7] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' wins')
        return true
    }
    //linha de baixo horizontal
    else if(places[2] =='x' && places[5] =='x' && places[8] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' wins')
        return true
    }else if(
        places[0] !=' ' && places[1] !=' ' && places[2] !=' ' &&
        places[3] !=' ' &&places[4] !=' ' && places[5] !=' ' &&
        places[6] !=' ' && places[7] !=' ' && places[8] !=' '){
       console.clear()
       console.log('nobody win')
       return true
   
   }else{
        return false
    }
}
show_board = () =>{console.log(
    '\n '+
    places[0]+'|'+places[1]+'|'+places[2]+
    '\n-------\n '+
    places[3]+'|'+places[4]+'|'+places[5]+
    '\n-------\n '+
    places[6]+'|'+places[7]+'|'+places[8]+'\n'
    )}
    reset_places = ()=>{
        for(i =0; i<9;i++){
            places[i] = ' '
        }
    }
    player_2_turn = () =>{
        console.clear()
    show_board()
    play = prompt('You are o, select a place ')
    if(places[play-1] == ' '){
        places[play-1] = 'o'
        for(i = 0;i<9;i++){
            if(end_game() == false){
                return player_1_turn()
            }else{
                break
            }
        }
    }else{
        console.log('This place is already marked or doesnt exist\n')
        lock_enter = prompt('Press enter to continue')
        player_2_turn()
    }
}

player_1_turn = () =>{
    console.clear()
    show_board()
    play = prompt('You are x, select a place ')
    if(places[play-1] == ' '){
        places[play-1] = 'x'
        for(i = 0;i<9;i++){
            if(end_game() == false){
                return player_2_turn()
            }else{
                break
            }
        }
    }else{
        console.log('This place is already marked or doesnt exist\n')
        lock_enter = prompt('Press enter to continue')
        player_1_turn()
    }
}

show_instructions = ()=>{
    console.log('To select a place chose a number\n '+
    1+'|'+2+'|'+3+
    ' \n-------\n '+
    4+'|'+5+'|'+6   +
    '\n-------\n '+
    7+'|'+8+'|'+9+'\n'
    )
}

console.log(places)

reset_places()

player_1_turn()
show_board()