import { useCallback } from 'react';
import axios from 'axios';
import config from '../../../config/config';
import { TodoParams } from '../../../../common/domain/entities/todo';

const fetchTodos = useCallback(
    async () => {
        try {
            const res = await fetch(`${config.apiUrl}/`);
            const todoList = await res.json();
            return todoList;
        } catch (e) {
            console.log(e);
        }
    },
    [],
);