import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
    pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
    pizzas: fromPizzas.reducer
}

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);
export const getAllPizzas = createSelector<ProductsState>(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector<ProductsState>(getPizzaState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector<ProductsState>(getPizzaState, fromPizzas.getPizzasLoading);
