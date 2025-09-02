import type { Column, Id } from '../../components/canban/types';

export interface IProps{
  column: Column
  deleteColumn: (id: Id) => void
  updateColumn: (id: Id, title: string) => void
}