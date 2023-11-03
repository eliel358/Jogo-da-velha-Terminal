// console.log(' x|x|x\n-------\n x|x|x\n-------\n x|x|x')
prompt = require('prompt-sync')()
places = ['x','x','x','x','o',' ',' ',' ','o']
end_game = () =>{
    //diagonal esquerda para direita
    
    if(places[0] =='o' && places[4] =='o' && places[8] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //diagonal direita para esquerda
    else if(places[2] =='o' && places[4] =='o' && places[6] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha de cima horizontal
    else if(places[0] =='o' && places[1] =='o' && places[2] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha do meio horizontal
    else if(places[3] =='o' && places[4] =='o' && places[5] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha de baixo horizontal
    else if(places[6] =='o' && places[7] =='o' && places[8] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha de cima vertical
    else if(places[0] =='o' && places[3] =='o' && places[6] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha do meio horizontal
    else if(places[1] =='o' && places[4] =='o' && places[7] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha de baixo horizontal
    else if(places[2] =='o' && places[5] =='o' && places[8] =='o'){
        winner = 'o'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    else if(places[0] =='x' && places[4] =='x' && places[8] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //diagonal direita para esquerda
    else if(places[2] =='x' && places[4] =='x' && places[6] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha de cima horizontal
    else if(places[0] =='x' && places[1] =='x' && places[2] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha do meio horizontal
    else if(places[3] =='x' && places[4] =='x' && places[5] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha de baixo horizontal
    else if(places[6] =='x' && places[7] =='x' && places[8] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha de cima vertical
    else if(places[0] =='x' && places[3] =='x' && places[6] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha do meio horizontal
    else if(places[1] =='x' && places[4] =='x' && places[7] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }
    //linha de baixo horizontal
    else if(places[2] =='x' && places[5] =='x' && places[8] =='x'){
        winner = 'x'
        console.clear()
        console.log(winner+' ganhou!')
        show_board()
        return true
    }else if(
        places[0] !=' ' && places[1] !=' ' && places[2] !=' ' &&
        places[3] !=' ' &&places[4] !=' ' && places[5] !=' ' &&
        places[6] !=' ' && places[7] !=' ' && places[8] !=' '){
            console.clear()
            console.log('Ninguem ganhou ._.')
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
        show_instructions()
        show_board()
        play = prompt('Você é a bola, escolha onde jogar ')
        if(play == ' '){
            
            console.log('Este lugar não existe ou já está marcado\n')
            lock_enter = prompt('Aperte enter para continuar')
            player_2_turn()
        }
        play = play -1
        
        if(play >= 6){
            console.log(play)
            play = play - 6
        }else if(play < 3){
            play = play+6
        }
        if(places[play] == ' '){
            
            
            places[play] = 'o'
            for(i = 0;i<9;i++){
                if(end_game() == false){
                    show_board()
                    return player_1_turn()
                }else{
                    break
                }
            }
        }else{
            console.log('Este lugar não existe ou já está marcado\n')
            lock_enter = prompt('Aperte enter para continuar')
            player_2_turn()
        }

}

player_1_turn = () =>{
    console.clear()
    show_instructions()
    show_board()
    play = prompt('Você é o x, escolha onde jogar ')
    if(play == ' '){
        
        console.log('Este lugar não existe ou já está marcado\n')
        lock_enter = prompt('Aperte enter para continuar')
        player_1_turn()
    }
    play = play -1
    

    if(play >= 6){
        console.log(play)
        play = play - 6
    }else if(play < 3){
        play = play+6
    }
    if(places[play] == ' '){
        
        
        places[play] = 'x'
        for(i = 0;i<9;i++){
            if(end_game() == false){
                show_board()
                return player_2_turn()
            }else{
                break
            }
        }
    }else{
        console.log('Este lugar não existe ou já está marcado\n')
        lock_enter = prompt('Aperte enter para continuar')
        player_1_turn()
    }
}

show_instructions = ()=>{
    console.log('Para selecionar onde jogar, escolha um numero \n \n '+
    7+'|'+8+'|'+9+
    ' \n-------\n '+
    4+'|'+5+'|'+6   +
    '\n-------\n '+
    1+'|'+2+'|'+3+'\n'
    )
}

// console.log(places)

// reset_places()

// player_1_turn()
// show_board()
// show_instructions()

// play = prompt('Você é a bola, escolha onde jogar')
// play = play -1
// if(places[play] == ' '){
    
//     if(play >= 6){
//         console.log(play)
//         play = play - 6
//     }else if(play < 3){
//         console.log(play)
//         play = play+6
//     }
//     for(i = 0;i<9;i++){
//         if(end_game() == false){
//             places[play] = 'o'
//             show_board()
//             return
//         }else{
//             show_board()
//             return
//         }
//     }
// }else{
//     console.log('Este lugar não existe ou já está marcado\n')
//     lock_enter = prompt('Aperte enter para continuar')
//     return
// }

console.clear()
reset_places()
player_1_turn()
