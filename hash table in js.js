// creaTE a hash function 
const hash =  function(key, size) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++){
        hashedKey = key.charcodeAt(i);
    }
    return hashedKey % size;
}

class HashTable{
    constructor(size) {
        this.size = size;
        this.bucket = Array(this.size);
    }

    for(let i = 0;i<this.bucket.length; i++) {
    this.buckets[i] = new Map();
}
insert(key, value) {
    let idx = hash(key, this.size);
    this.bucket[idx].set(key, value);
}
remove(key){
    let idx = hash(key, this.size);
    let deleted = this.bucket[idx].get(key);
    this.bucket
}
    

}