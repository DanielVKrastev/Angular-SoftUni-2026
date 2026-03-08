class Box<T> {
    private _boxes: T[] = [];

    public add(element: T): void{
        this._boxes.push(element);
    }

    public remove(): T | undefined{
        return this._boxes.pop();
    }

    public get count() : number {
        return this._boxes.length;
    }
    
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

console.log('------------------');

let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
