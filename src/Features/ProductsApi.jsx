
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi=createApi({
    reducerPath:'productsApi',
    baseQuery:fetchBaseQuery({baseUrl:'/api'}),
    endpoints:(builder)=>{
        return{
            getAllproducts:builder.query({
                query:()=>'/products',
                
            }),
            getProductById:builder.query({
                query:(id)=>`/products/${id}`,
            }),
            getProductsByCategory:builder.query({
                query:(category)=>`/products?category=${category}`,
            }),
            getProductsBySearch:builder.query({
                query:(searchTerm)=>`/products?search=${searchTerm}`,
            }),
            addProduct:builder.mutation({
                query:(newProduct)=>({
                    url:'/products',
                    method:'POST',
                    body:newProduct,
                }),
            }),
            updateProduct:builder.mutation({
                query:({id,updatedProduct})=>({
                    url:`/products/${id}`,
                    method:'PUT',
                    body:updatedProduct,
                }),
            }),
            deleteProduct:builder.mutation({
                query:(id)=>({
                    url:`/products/${id}`,
                    method:'DELETE',
                }),
            }),
        }
    }
})

export const { 
    useGetAllproductsQuery,
    useGetProductByIdQuery,
    useGetProductsByCategoryQuery,
    useGetProductsBySearchQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsApi;
export default productsApi;

