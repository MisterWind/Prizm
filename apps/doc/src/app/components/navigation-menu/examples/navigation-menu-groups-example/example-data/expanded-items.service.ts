import { Injectable } from '@angular/core';
import { CustomItem, PersistentExpandedValue } from './interfaces';

@Injectable()
export class ExpandedItemsService {
  public getItemsExpandedKeys(): PersistentExpandedValue | null {
    return JSON.parse(localStorage.getItem('EXPANDED_ITEMS_EXAMPLE'));
  }

  public getGroupsExpandedKeys(): PersistentExpandedValue | null {
    return JSON.parse(localStorage.getItem('EXPANDED_GROUPS_EXAMPLE'));
  }

  public setItemsExpandedKeys(expandedItemsMap: Map<CustomItem, boolean>): void {
    const obj: PersistentExpandedValue = {};
    for (const [item, isExpanded] of expandedItemsMap.entries()) {
      if (isExpanded) {
        obj[item.id] = true;
      }
    }
    localStorage.setItem('EXPANDED_ITEMS_EXAMPLE', JSON.stringify(obj));
  }
  public setGroupsExpandedKeys(expandedGroupsMap: Map<string, boolean>): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const obj: PersistentExpandedValue = Object.fromEntries(expandedGroupsMap);
    localStorage.setItem('EXPANDED_GROUPS_EXAMPLE', JSON.stringify(obj));
  }
}
