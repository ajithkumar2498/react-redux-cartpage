import { createSlice,current } from '@reduxjs/toolkit'



export const CartSlice = createSlice ({
    name:'Cart',
    initialState:{ 
         "products": [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 10,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ],
            "item":1
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ],
            "item":1
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/3/1.jpg",
                "https://i.dummyjson.com/data/products/3/1.jpg",
                "https://i.dummyjson.com/data/products/3/1.jpg"
            ],
            "item":1
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/4/1.jpg",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ],
            "item":1
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/5/1.jpg",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg"
            ],
            "item":1
        }
    ], 
    "total":1,
},

    
    reducers:{
        increment: (state,action)=>{
          
            let a=structuredClone(current(state.products))
            
                a[action.payload]={...a[action.payload],item:a[action.payload].item+1}
            state.products=a 
            
          
        },
        decrement: (state,action)=>{
            let a=state.products
            if(a[action.payload].item>0){
            a[action.payload]={...a[action.payload],item:a[action.payload].item-1}
            state.products=a
            }
        },
        deleteCart: (state,action)=>{
          let tempCart = [...state.products]
          let index;
          for(let i=0; i<tempCart.length;i++){
            if(tempCart[i].id===action.id){
                index=i;
                break
            }
          }
          tempCart.splice(index,1)
          state.products = tempCart
        
        },
       handlePrice:(state)=>{
        let a= current(state)
        let ans = 0;
        a.products.map((i) => {
          ans += i.item * i.price;
        });
       state.total= ans      
     },
        }
    }  
)
export const { increment , decrement, deleteCart,handlePrice } = CartSlice.actions

export default CartSlice.reducer