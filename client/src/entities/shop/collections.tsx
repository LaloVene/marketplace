import { Item } from './item';

export interface Collections {
  id: number,
  title: string,
  routeName: string,
  items: Item[],
}