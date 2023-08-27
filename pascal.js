import { show, rcross, turn_upside_down,
         beside, stack, repeat_pattern,
         quarter_turn_left, quarter_turn_right,stack_frac,stackn,beside_frac,
         square,blank,overlay_frac,scale,circle,hollusion,overlay, heart, random_color}
from 'rune';

function sum_of_digit(m,n) {
    return n <= 0
    ? m
    : sum_of_digit(m + n % 10, math_floor(n / 10));
}

function ispowertwo(n){
    return n === 1 ? true : ispowertwo(n);
}

function pasc(row, index) {
    return index > row 
    ? false
    : index === row || index === 1
    ? 1
    : pasc(row - 1, index - 1) + pasc(row - 1, index);
}
pasc(5,4);