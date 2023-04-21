import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  parentId: number | null;
}

@Component({
  selector: 'app-parent-child-dropdown',
  templateUrl: './parent-child-dropdown.component.html',
  styleUrls: ['./parent-child-dropdown.component.scss']
})
export class ParentChildDropdownComponent {
  parentItems: Item[] = [

  ];

  childItems: Item[] = [
    { id: 3, name: 'Child 1-1', parentId: 1 },
    { id: 4, name: 'Child 1-2', parentId: 1 },
    { id: 5, name: 'Child 2-1', parentId: 2 },
    { id: 6, name: 'Child 2-2', parentId: 2 }
  ];

  selectedParent: number | null = null;
  filteredChildItems: Item[] = [];
  newChildItem = '';
  newParentItem = '';
  showAddStateInput = false;
  showAddDistrictInput = false;

  constructor() {
    this.filterChildItems();
  }

  filterChildItems() {
    this.filteredChildItems = this.childItems.filter(
      (item) => item.parentId === this.selectedParent && item.name.toLowerCase().includes(this.newChildItem.toLowerCase())
    );
  }

  addChildItem() {
    if (this.newChildItem) {
      const newItem = { id: this.childItems.length + 1, name: this.newChildItem, parentId: this.selectedParent };
      this.childItems.push(newItem);
      this.filterChildItems();
      this.newChildItem = '';
    }
  }

  cancelAddDistrict() {
    this.newChildItem = '';
    this.showAddDistrictInput = false;
  }

  addParentItem() {
    if (this.newParentItem) {
      const newItem = { id: this.parentItems.length + 1, name: this.newParentItem, parentId: null };
      this.parentItems.push(newItem);
      this.newParentItem = '';
    }
  }
  
  cancelAddState() {
    this.newParentItem = '';
    this.showAddStateInput = false;
  }

  toggleAddState() {
    this.showAddStateInput = !this.showAddStateInput;
  }

  toggleAddDistrict() {
    this.showAddDistrictInput = !this.showAddDistrictInput;
  }

  selectParent(parentId: number | null) {
    this.selectedParent = parentId;
    this.filterChildItems();
  }

  getParents() {
    return this.parentItems.filter((item) => item.parentId === null);
  }

  getChildItems() {
    return this.filteredChildItems;
  }

  addChildToParent(parentId: number) {
    this.selectedParent = parentId;
    this.toggleAddDistrict();
  }

  addDistrict() {
    if (this.newChildItem) {
      const newItem = { id: this.childItems.length + 1, name: this.newChildItem, parentId: this.selectedParent };
      this.childItems.push(newItem);
      this.filterChildItems();
      this.newChildItem = '';
      this.showAddDistrictInput = false;
    }
  }
}
