let week_days = "sunday"

/*
    *PRIMEIRA VERSÃO USANDO IF...ELSE
*/
if(week_days === 'monday'){
    console.log("Dia normal de trabalho dentro do if")

}else if(week_days === 'tuesday'){
    console.log("Esse é um outro dia normal de trablho meu caro dentro do if")

}else if(week_days === 'wednesday'){
    console.log("Bora trabalhar seu preguisozo dentro do if")

}else if(week_days === 'thursday'){
    console.log("Bora que atraz vem gente dentro do if")

}else if(week_days === 'friday' || week_days === 'saturday' || week_days === 'sunday'){
    console.log("Chegou o dia do homem dentro do if")

}else{
    console.log("Opa! esse dia não exsite não hein dentro do if")
}

/*
    *SEGUNDA VERSÃO USANDO SWITCH...CASE
*/
console.log("****************************************************************************")
switch(week_days){
    case 'monday':
        console.log("Dia normal de trabalho dentro do switch")
        break
    case 'tuesday':
        console.log("Esse é um outro dia normal de trablho meu caro dentro do switch")
        break
    case 'wednesday':
        console.log("Bora trabalhar seu preguisozo dentro do switch")
        break
    case 'thursday':
        console.log("Bora que atraz vem gente dentro do switch")
        break
    case 'friday': case 'saturday': case 'sunday':
        console.log("Chegou o dia do homem dentro do switch")
        break
    default:
        console.log("Opa! esse dia não exsite não hein dentro do switch")
}