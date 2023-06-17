import { Sorter } from "./Sorter";
import { LinkedList } from "./LinkedList";

// const numberCollection = new NumberCollection([10, 3, -5, 0]);
// const sorter = new Sorter( numberCollection )
// sorter.sort();
// console.log(numberCollection.data);

// const string = new CharacterCollection('DaaaxX')
// const stringSort = new Sorter(string)
// stringSort.sort()
// console.log(string.data);

const linkedList = new LinkedList();
linkedList.add(8)
linkedList.add(20)
linkedList.add(-5)
linkedList.add(0);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print()

