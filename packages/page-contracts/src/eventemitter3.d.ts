// Copyright 2017-2026 @pezkuwi/app-contracts authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Type override for eventemitter3 to fix verbatimModuleSyntax ESM import issue
declare module 'eventemitter3' {
  export type ValidEventTypes = string | symbol | object;

  export type EventNames<T extends ValidEventTypes> = T extends string | symbol
    ? T
    : keyof T;

  export type EventListener<
    T extends ValidEventTypes,
    K extends EventNames<T>
  > = T extends string | symbol
    ? (...args: any[]) => void
    : (...args: any[]) => void;

  export type EventArgs<
    T extends ValidEventTypes,
    K extends EventNames<T>
  > = any[];

  class EventEmitter<
    EventTypes extends ValidEventTypes = string | symbol,
    Context extends any = any
  > {
    static prefixed: string | boolean;

    eventNames(): Array<EventNames<EventTypes>>;
    listeners<T extends EventNames<EventTypes>>(event: T): Array<EventListener<EventTypes, T>>;
    listenerCount(event: EventNames<EventTypes>): number;
    emit<T extends EventNames<EventTypes>>(event: T, ...args: EventArgs<EventTypes, T>): boolean;
    on<T extends EventNames<EventTypes>>(event: T, fn: EventListener<EventTypes, T>, context?: Context): this;
    addListener<T extends EventNames<EventTypes>>(event: T, fn: EventListener<EventTypes, T>, context?: Context): this;
    once<T extends EventNames<EventTypes>>(event: T, fn: EventListener<EventTypes, T>, context?: Context): this;
    removeListener<T extends EventNames<EventTypes>>(event: T, fn?: EventListener<EventTypes, T>, context?: Context, once?: boolean): this;
    off<T extends EventNames<EventTypes>>(event: T, fn?: EventListener<EventTypes, T>, context?: Context, once?: boolean): this;
    removeAllListeners(event?: EventNames<EventTypes>): this;
  }

  export { EventEmitter };
  export default EventEmitter;
}
