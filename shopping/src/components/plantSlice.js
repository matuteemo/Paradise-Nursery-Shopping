import {createSlice} from '@reduxjs/toolkit';

// Define the initial state of the inventory. This is where we will store the list of plants available in the nursery.

const initialState = {
    inventory:[
        {
            category: "Air purifying plants",
            plants: [
                {
                    id: 1,
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: 15
                },
                {
                    id: 2,
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: 12
                },
                {
                    id: 3,
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and improves indoor air quality.",
                    cost: 20
                },
                {
                    id: 4,
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Increases humidity and removes pollutants.",
                    cost: 18
                },
                {
                    id: 5,
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has medicinal properties.",
                    cost: 10
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    id: 6,
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: 20
                },
                {
                    id: 7,
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: 18
                },
                {
                    id: 8,
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: 15
                },
                {
                    id: 9,
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: 12
                },
                {
                    id: 10,
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: 14
                },
                {
                    id: 11,
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: 22
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    id: 12,
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: 10
                },
                {
                    id: 13,
                    name: "Marigold",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: 8
                },
                {
                    id: 14,
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: 20
                },
                {
                    id: 15,
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: 9
                },
                {
                    id: 16,
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: 20
                },
                {
                    id: 17,
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: 13
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    id: 18,
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: 14
                },
                {
                    id: 19,
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: 16
                },
                {
                    id: 20,
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: 13
                },
                {
                    id: 21,
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: 14
                },
                {
                    id: 22,
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: 15
                },
                {
                    id: 23,
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: 12
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    id: 24,
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: 25
                },
                {
                    id: 25,
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: 10
                },
                {
                    id: 26,
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: 15
                },
                {
                    id: 27,
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: 20
                },
                {
                    id: 28,
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: 18
                },
                {
                    id: 29,
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: 22
                }
            ]
        }
    ],
    cart: [] // This will hold the plants that the user has added to their shopping cart.
};

// Create a slice for the plant inventory. This will include the initial state and reducers to handle actions related to the inventory and cart.

const plantSlice = createSlice({
    name: 'plants',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const plant = action.payload;
            const existingItem = state.cart.find(item => item.id === plant.id); // Check if the plant is already in the cart. this returns the item if it exists, or undefined if it doesn't.
            if (existingItem) {
                existingItem.quantity += 1; // If the plant is already in the cart, increase the quantity.
            } else {
                state.cart.push({...plant, quantity: 1}); // If it's not in the cart, add it with a quantity of 1.
            }
        },
        removeFromCart: (state, action) => {
            const plant = action.payload;
            const existingItem = state.cart.find(item => item.id === plant.id); // Check if the plant is in the cart.
            if (existingItem) {
                state.cart = state.cart.filter(item => item.id !== plant.id); // If the plant is in the cart, remove it by filtering it out of the cart array.
            }
        },
        clearCart: (state) => {
            state.cart = []; // Clear the cart by setting it to an empty array.
        },
        increaseQuantity: (state, action) => {
            const plant = action.payload;
            const existingItem = state.cart.find(item => item.id === plant.id); // Check if the plant is in the cart.
            if (existingItem) {
                existingItem.quantity += 1; // If the plant is in the cart, increase the quantity by 1.
            }
        },
        decreaseQuantity: (state, action) => {
            const plant = action.payload;
            const existingItem = state.cart.find(item => item.id === plant.id);
            // Check if the plant is in the cart.
            if(existingItem){
                if(existingItem.quantity > 1){
                    existingItem.quantity -= 1; // If the quantity is greater than 1, decrease it by 1.
                }
            }
        }
    }
});

export const {addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity} = plantSlice.actions; // Export the action creators generated by createSlice.
export default plantSlice.reducer; // Export the reducer to be included in the store.