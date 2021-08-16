import { Base } from './base';

export type TodoParams = {
    title: string;
};

export type Todo = TodoParams & Base;