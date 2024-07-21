"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
// const numberCollection = new NumberCollection([10, 3, -5, 0]);
// const sorter = new Sorter( numberCollection )
// sorter.sort();
// console.log(numberCollection.data);
// const string = new CharacterCollection('DaaaxX')
// const stringSort = new Sorter(string)
// stringSort.sort()
// console.log(string.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(8);
linkedList.add(20);
linkedList.add(-5);
linkedList.add(0);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
