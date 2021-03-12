import ProductModel from "../Models/ProductModel";

// Products State - Info in Application Level related to Products.
export class ProductsState {
    public products: ProductModel[] = []; // important to initialize the array.
}

// Products Action Type:
export enum ProductsActionType {
    ProductsDownloaded = "ProductsDownloaded",
    ProductsAdded = "ProductsAdded",
    ProductUpdated = "ProductUpdated",
    ProductDeleted = "ProductDeleted"
}

// Products Action:
export interface ProductsAction {
    type: ProductsActionType,
    payload?: any;
}

// Products Action Creators:
export function productsDownloadedAction(products: ProductModel[]): ProductsAction{
    return { type: ProductsActionType.ProductsDownloaded, payload: products};
}

export function productsAddedAction(addedProduct: ProductModel): ProductsAction{
    return { type: ProductsActionType.ProductsAdded, payload: addedProduct};
}

export function productsUpdatedAction(updatedProduct: ProductModel): ProductsAction{
    return { type: ProductsActionType.ProductUpdated, payload: updatedProduct};
}

export function productsDeletedAction(id: number): ProductsAction{
    return { type: ProductsActionType.ProductDeleted, payload: id};
}

//Products Reducers:
export function productsReducer(oldState: ProductsState = new ProductsState(), action: ProductsAction):ProductsState{
    const newState = {...oldState };

    switch(action.type){
        // payload = products[]
        case ProductsActionType.ProductsDownloaded:
            newState.products =  action.payload;
            break;
            // payload = added products
        case ProductsActionType.ProductsAdded:
            newState.products.push(action.payload);
            break;

            // payload = updated product
        case ProductsActionType.ProductUpdated:
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id);
            newState.products[indexToUpdate] = action.payload;
            break;

            // payload = product id to delete
        case ProductsActionType.ProductDeleted:
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload.id);
            newState.products.splice(indexToDelete, 1);
            break;

    }

    return newState;
}