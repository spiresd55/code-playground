// @ts-ignore
import {combineReducers, createStore, applyMiddleware} from "redux";
import DatasourceState from "./reducers/DatasourceState";

// @ts-ignore
import thunk from "redux-thunk";

export class AppStore {
    private static instance: AppStore;
    private _store: any;
    constructor() {}

    static getInstance() {
        if(!AppStore.instance) {
            AppStore.instance = new AppStore();
        }
        return AppStore.instance;
    }

    get store() {
        return this._store;
    }

    set store(store) {
        this._store = store;
    }

    public initialize() {
        console.info("App store is intializing!");

        //Allows the store to be broken into different states
        const rootReducer = combineReducers({
            DatasourceState
        });

        this.store = createStore(
            rootReducer,
            applyMiddleware(thunk)
        );
    }
}
