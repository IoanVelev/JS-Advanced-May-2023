function createSortedList() {
  let obj = {
    arrList: [],
    add: function(num){
        this.arrList.push(num);
        this.arrList.sort((a, b) => a - b);
        this.size += 1;
        return obj;
    },
    remove: function(index){
        if (index >= 0 && index < this.arrList.length) {
            this.arrList.splice(index, 1);
            this.size -= 1;
            return obj;
        }
    },
    get: function(index) {
        if (index >= 0 && index < this.arrList.length) {
            let el = this.arrList[index];
            return el;
        }
    },
    size: 0
  };
  return obj;
}

