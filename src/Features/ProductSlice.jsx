import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

const initialState={
    items:[],
    status:null
}
export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const response=await fetch('/api/products')
    return response.json();
})
const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.items=action.payload
        },
        setStatus:(state,action)=>{
            state.status=action.payload
        },
        addProduct:(state,action)=>{
            state.items.push(action.payload)
        },
        removeProduct:(state,action)=>{
            state.items=state.items.filter(item=>item.id!==action.payload)
        }
    }
    ,extraReducers:builder=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.status='loading'
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='succeeded'
            state.items=action.payload
        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.status='failed'
        })
        
      
    }
});
export default ProductSlice.reducer