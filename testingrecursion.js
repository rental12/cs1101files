import { show, rcross, turn_upside_down,
         beside, stack, repeat_pattern,
         quarter_turn_left, quarter_turn_right,stack_frac,stackn,beside_frac,
         square,blank,overlay_frac,scale,circle,hollusion,overlay}
from 'rune';

function hook(frac){
    return stack(square,beside_frac(1-frac,blank,square));
}
function spiral(thick,depth){
    return depth===0?blank:stack_frac(thick,hook(thick/2),
    quarter_turn_right(spiral(thick,depth-1)));
}
function cone(n, rune){
    // your answer here
    return n===1?rune:overlay_frac((n-1)/n,scale((n-1)/n,cone(n-1,rune)),rune);
}
function cone2(n,rune){
    return n===1?rune:overlay(scale((n-1)/n,cone(n-1,rune)),rune);
}
// Tests
show(cone2(4, circle));
show(cone(4,circle));
