import { Base } from './base';

export type TodoParams = {
    title?: string;
    desc_ription?: string;
    is_done?: boolean;
};

export type Todo = TodoParams & Base;