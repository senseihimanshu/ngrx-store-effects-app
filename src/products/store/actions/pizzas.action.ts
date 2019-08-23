import { Action } from '@ngrx/store';

import { Pizza } from "../../models/pizza.model";

export const LOAD_PIZZAS = '[Products] Laod Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Laod Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Laod Pizzas Success';

export class LoadPizzas implements Action{
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action{
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(private payload: any){}
}

export class LoadPizzasSuccess implements Action{
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(private payload: any){}
}

//Action Types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;

