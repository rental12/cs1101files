function part(xs, index) {
    function helper(xs, less, more, i) {
        if(is_null(xs)) {
            return pair(reverse(less), reverse(more));
        }
        else if (i >= head(xs)) {
            return helper(tail(xs), pair(head(xs), less), more, i);
        }
        else {
            return helper(tail(xs), less, pair(head(xs), more), i);
        }
    }
    return helper(xs, null, null, index);
}

const a = list(5,4,3,1,2,10,9,8);

function quicksort(xs) {
    if(is_null(xs) || length(xs) === 1) {
        return xs;
    }
    else {
        const parti = part(tail(xs), head(xs));
        const front = head(parti);
        const back = tail(parti);
        return append(quicksort(front), pair(head(xs), quicksort(back)));
    }
}
function takedrop(xs, index) {
    function helper(xs, take, drop, count) {
        if(count === 0) {
            return pair(take, drop);
        }
        else {
            return helper(tail(xs), pair(head(xs), take), tail(xs), count - 1);
        }
    }
    return helper(xs, null, null, index);
}

function merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    }
    else if (is_null(ys)) {
        return xs;
    }
    else {
        if (head(xs) < head(ys)) {
            return pair(head(xs), merge(tail(xs), ys));
        }
        else {
            return pair(head(ys), merge(xs, tail(ys)));
        }
    }
    
}

function ms(xs) {
    if (is_null(xs) || length(xs) === 1) {
        return xs;
    }
    else {
        const mid = math_floor(length(xs) / 2);
        const parti = takedrop(xs, mid);
        const take = head(parti);
        const drop = tail(parti);
        return merge(ms(take), ms(drop));
    }
    
}

function min(xs) {
    function helper(xs, m, rest) {
        if (is_null(xs)) {
            return pair(m, rest);
        }
        else if(m > head(xs)) {
            return helper(tail(xs), head(xs), pair(m, rest));
        }
        else {
            return helper(tail(xs), m, pair(head(xs), rest));
        }
    }
    return helper(tail(xs), head(xs), null);
}

function select(xs) {
    if (is_null(xs)) {
        return null;
    }
    else {
        const m = min(xs);
        return pair(head(m), select(tail(m)));
    }
    
}
function insert(i, xs) {
    if (is_null(xs)) {
        return list(i);
    }
    else if (i >= head(xs)) {
        return pair(head(xs), insert(i, tail(xs)));
    }
    else {
        return pair(i, xs);
    }
}

function insort(xs) {
    return is_null(xs) ? null : insert(head(xs), insort(tail(xs)));
}

const bbb = list(1,2,3,4,5);

function alist(xs) {
    return x => x < 0 || x === length(xs) ? null : list(list_ref(xs, x));
}

function find8(t) {
    if(is_number(t)) {
        if(t === 8) {
            return list(null);
        }
        else {
            return null;
        }
    }
    else {
        return append(map(x=> pair('head',x), find8(head(t))), 
        map(x => pair('tail', x), find8(tail(t))));
    }
}


function mins(t) {
    return is_pair(head(t)) ? mins(head(t)) : head(t);
}
function maxs(t) {
    return !is_null(tail(t)) ? maxs(tail(t)) : (is_pair(head(t)) ? 
    maxs(head(t)) : head(t));
}

const ab = list(0, list(1, list(2)), list(3), list(list(list(8))));


function rpe(m, k) {
    return k === 0 ? null : pair(m, rpe(m, k - 1)); 
}

function expand(m, k) {
    return accumulate((curr, wish) => append(rpe(curr, k), wish), null, m);
}

function pp (m, k) {
    const a = accumulate((curr, y) => pair(expand(curr, k), y), null, m);
    return map(x => rpe(x, k), a);
}

function all8(t) {
    return is_number(t) ? (t === 8 ? list(null) : null) :
    append(map(x => pair("head", x), all8(head(t))), 
    map(x => pair("tail", x), all8(tail(t))));
}

function has(t, k) {
    if (is_number(t)) {
        return t === k; 
    }
    else if (has(head(t), k)) {
        return true;
    }
    else if (has(tail(t), k)) {
        return true;
    }
    else {
        return false;
    }
}


function has8(t) {
    if(is_number(t)) {
        if(t === 8) {
            return list(null);
        }
        else {
            return null;
        }
    }
    else {
        return append(map(x => pair("head", x), has8(head(t))), 
        map(x => pair("tail", x), has8(tail(t))));
    }
}


function take(xs, n) {
    return n === 0 ? null : pair(head(xs), take(tail(xs), n - 1));
}

function drop(xs, n) {
    return n === 0 ? xs : drop(tail(xs), n - 1);
}


function ins(x, xs) {
    return map(index => append(take(xs, index), pair(x, drop(xs, index))),
    enum_list(0, length(xs)));

  
}


function perms(xs) {
    if(is_null(xs)) {
        return list(null);
    }
    else {
        const without = perms(tail(xs));
        const withs = map(x => ins(head(xs), x), without);
        return append(without, withs);
    }
}
display_list(perms(list(1,2,3)));

const abc = x => {
    return x === 0 ? 1 : x * abc(x - 1);
};

function repeat(L, k) {
    return k === 0 ? null : pair(L, repeat(L, k - 1));
}

function ex_list(L, k) {
    return accumulate((x, wish) => append(repeat(x, k), wish), null, L);
}

function mat(L, k) {
    return map(x => repeat(x, k), map(y=> ex_list(y, k), L));
}

function du(xs) {
    return accumulate((x, y) => pair(x, remove_all(x, y)), null, xs);
}
function checkg(x) {
    return x === 1 ? "correct" : x > 1 ? "high" : "low";
}

function guess(start, end) {
    
    if (start === end) {
        return start; // 0 number in  between
    }
    else {
        const guesss = math_floor((start+end) / 2); //guess middle first
        const check = checkg(guesss); //verify
        if (check === "correct") { //we got it, return back
            return guesss;
        }
        else if (check === "low") {
            return guess(guesss + 1, end); //guess is too low, we look into right
        }
        else {
            return guess(start, guesss - 1); //guess too high, look into left
        }
    }
    
}

function fil(xs) {
    return is_null(xs)? null : 
    pair(head(xs), filter(x => x!==head(xs), fil(tail(xs))));
}

function subl(start, end, L) {
    function helper(pos, ys, res) {
        if(pos > end) {
            return reverse(res);
        }
        else if(pos < start) {
            return helper(pos + 1, tail(ys), res);
        }
        else {
            return helper(pos + 1, tail(ys), pair(head(ys), res));
        }
    }
    return helper(0, L, null);
}




