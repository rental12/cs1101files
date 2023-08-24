import { show, rcross, turn_upside_down,
         beside, stack, repeat_pattern,
         quarter_turn_left, quarter_turn_right,stack_frac,stackn,beside_frac,
         square,blank,overlay_frac,scale,circle,hollusion,overlay}
from 'rune';

function iterpow(base,base2,pow){
    return pow===0?1:pow===1?base:iterpow(base*base2,base2,pow-1);
}
function pow(n,pow)
{
    return iterpow(n,n,pow);
}
function pow2(n,pow){
    return pow===0?1:pow===1?n:n*pow2(n,pow-1);
}
pow(5,4);
//pow2(5,3);