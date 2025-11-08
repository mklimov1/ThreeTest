import EventEmitter from 'eventemitter3';

import type { Breakpoint, Size } from '@/shared';

type TEvents = {
  resize: (size: Size, breakpoint: Breakpoint) => void;
}

export const appEventEmitter = new EventEmitter<TEvents>();
