import { show,heart, rcross, turn_upside_down,
         beside, stack, repeat_pattern,
         quarter_turn_left, quarter_turn_right,stack_frac,stackn,beside_frac,square,blank }
from 'rune';

function hook(frac){
    
    return stack(square,beside_frac(1-frac,blank,square));
}

function spiraloftwo(frac,n){
    return n===1?stack_frac(frac,hook(frac/2),blank): 
    stack_frac(frac,hook(frac/2),spiraloftwo(frac,n-1));
}

function staxn(rune,n){
    return n===1?rune:stack_frac(1/n,rune,staxn(rune,n-1));
    
}

show(staxn(heart,5));
show(stackn(5,heart));