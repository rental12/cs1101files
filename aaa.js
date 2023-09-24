function repeat(v, k) {
    return k === 0 ? null : pair(v, repeat(v, k - 1));
}

function expand_list(l, k) {
    return accumulate((x, y) => pair(repeat(x, k), y), null , l);
}

function expand_matrix(ls, k) {
    function accumulate_tree(f, op, init, tree) {
    
    return accumulate((x1, wish) => is_list(x1) 
    ? accumulate_tree(x => x, op, wish, x1) 
    : op(f(x1), wish), 
    init, 
    tree);
}
    return accumulate_tree(x => repeat(x, k), 
    (x, y) => list(expand_list(x, k), y)
    , null, ls);
}

const l = enum_list(1, 12);

function a(xs) {
    const a = tail(xs);
    return append(list(head(xs)), 
    accumulate((x, y) =>  pair(pair(x, y), null), pair(null, null), a));
}

function cmp(x, xs) {
    return x < xs;
}

function insert(x, xs, cmp) {
return is_null(xs)
? list(x)
: cmp(x, head(xs))
? pair(x, xs)
: pair(head(xs), insert(x, tail(xs), cmp));
}

function sort(xs, cmp) {
    return accumulate((x, y) => insert(x, y, cmp), null, xs);
}
function insert_sort(xs, cmp) {
return is_null(xs)
? xs
: insert(head(xs), insert_sort(tail(xs), cmp), cmp);
}

function sort_pairs_by_sum(PL) {
    return insert_sort(PL, (x, y) => head(x) + tail(x) < head(y) + tail(y));
}

const plist = list( pair(3,3), pair(1,2), pair(5,3), pair(0,5) );
sort_pairs_by_sum(plist); // returns list([1,2], [0,5], [3,3], [5,3])


function cartesian(a, b) {
    if (is_null(a)) {
        return null;
    }
    else if(!is_null(b)) {
        return pair(pair(head(a), head(b)), cartesian(tail(a), b));
    }
    else {
        
    }
}



function average_age(recruit_info) {
    function helper(xs, len, sum) {
        return is_null(xs) ? sum / len :
        helper(tail(xs), len, list_ref(head(xs), 2) + sum);
    }
    return helper(recruit_info, length(recruit_info), 0);
}



function split_type(recruits) {
    return accumulate((x, y) => head(tail(x)) ? append(list(x), y) :
   append(y, list(x)), null, recruits);
}


const recruit_info = list(list(150, true, 19),
list(101, false, 21), list(122, false, 20));


const aa = enum_list(1, 12);

function xd(xs) {
    return accumulate((curr, wish) => curr % 2 !== 0 
    ? pair(pair(curr,null), wish) : pair(curr, wish), null, aa);
}
function fun(N) {
return N <= 1 ? 1 : 1000000 * N * fun(N * 0.99);
}
fun(100);














