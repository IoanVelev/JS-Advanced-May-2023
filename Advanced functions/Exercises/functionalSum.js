function add(num){
    let sum = 0

    function internal(nextNum){
        sum += nextNum;
        return internal
    }
    internal.toString = () => {
        return sum;
    }
    return internal(num)
}