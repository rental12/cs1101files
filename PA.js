import {circle, stackn,stack,stack_frac,beside_frac,show,beside,quarter_turn_left
,quarter_turn_right} from 'rune';


let a=0;
let b = list();

function make_big_int_from_number(x) {
    while(!(x===0)){
        b= append(pair(x % 10, null), b);
        x=math_floor(x / 10);
        
    }
    return reverse(b);
    
}

function big_int(x) {
    let a = reverse(x);
    let b = 0;
    while(!(is_null(a))) {
        b = b * 10 + head(a);
        a=tail(a);
        
    }
    return b;
}

big_int(list(0, 0, 3, 2, 1, 8, 8, 8));

