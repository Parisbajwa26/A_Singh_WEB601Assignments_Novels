
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Content} from "./content-interface";

export class ContentList{
 private _items: Content[];

 constructor(){
  this._items = [];
 }
 get items(): Content[] {
 return this._items;
 }
 addItem(oneContentItem: Content): void{
 this._items.push(oneContentItem);
 }
 numberOfItems(): number{
 return this._items.length;
 }

  getHtml(index: number): string{
 if (index >= this._items.length || index < 0)
 {
      return "<div>Something went terribly wrong</div>"
     }
     let itemAtIndex = this._items[index]
    return `<div class="title">${itemAtIndex.title}</div>
             <div class="description">${itemAtIndex.description}</div>
             <div class="author">${itemAtIndex.author}</div>
            <div class="image"><img src="${itemAtIndex.imgURL}" width="200"></div>
            <div class="rating">${itemAtIndex.rating}</div>`;
 }
}
