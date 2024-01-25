
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import InventoryInventoryManager from "./components/listers/InventoryInventoryCards"
import InventoryInventoryDetail from "./components/listers/InventoryInventoryDetail"

import DeliveryDeliveryManager from "./components/listers/DeliveryDeliveryCards"
import DeliveryDeliveryDetail from "./components/listers/DeliveryDeliveryDetail"

import OrderOrderManager from "./components/listers/OrderOrderCards"
import OrderOrderDetail from "./components/listers/OrderOrderDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/inventories/inventories',
                name: 'InventoryInventoryManager',
                component: InventoryInventoryManager
            },
            {
                path: '/inventories/inventories/:id',
                name: 'InventoryInventoryDetail',
                component: InventoryInventoryDetail
            },

            {
                path: '/deliveries/deliveries',
                name: 'DeliveryDeliveryManager',
                component: DeliveryDeliveryManager
            },
            {
                path: '/deliveries/deliveries/:id',
                name: 'DeliveryDeliveryDetail',
                component: DeliveryDeliveryDetail
            },

            {
                path: '/orders/orders',
                name: 'OrderOrderManager',
                component: OrderOrderManager
            },
            {
                path: '/orders/orders/:id',
                name: 'OrderOrderDetail',
                component: OrderOrderDetail
            },



    ]
})
