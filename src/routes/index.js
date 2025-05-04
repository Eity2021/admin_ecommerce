import React, { Suspense } from 'react';
import ECommerce from '../pages/ecommerce/ECommerce';
import ProductList from '../pages/ecommerce/product/ProductList';
import AddProduct from '../pages/ecommerce/product/AddProduct';
import Dashboard from '../pages/home/Dashboard';
import CategoryLists from '../pages/category/CategoryList';
import NewCategory from '../pages/category/NewCategory';
import OrderList from '../pages/order/OrderList';
import NewSubCategory from '../pages/subCategory/NewSubCategory';
import { Circle } from 'lucide-react';




const routes= [
  {
    path: '/',
    name:"Dashboard",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    ),
    
  },
  {
    // path: '/ECommerce',
    name:"E-Commerce",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ECommerce />
      </Suspense>
    ),
    children: [
      {
      path: 'productLists', 
       name:"Product List",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
          <ProductList></ProductList>
          </Suspense>
        ),
      },
      {
        path: 'addProduct', 
       name:"Add Product",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
     <AddProduct></AddProduct>
          </Suspense>
        ),
      },
    
    ],
  },
  {
    // path: '/ECommerce',
    name:"Category",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
      <ECommerce />
      </Suspense>
    ),
    children: [
      {
        path: 'categoryLists', 
       name:"Category Lists",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
          <CategoryLists></CategoryLists>
          </Suspense>
        ),
      },
      {
        path: 'newCategory', 
       name:"New Category",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
     <NewCategory></NewCategory>
          </Suspense>
        ),
      },
    
    ],
  },
  {
    // path: '/ECommerce',
    name:"SubCategory",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
      <ECommerce />
      </Suspense>
    ),
    children: [
      {
        path: 'subCategoryLists', 
       name:"SubCategory Lists",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
          <CategoryLists></CategoryLists>
          </Suspense>
        ),
      },
      {
        path: 'newSubCategory', 
       name:"New SubCategory",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
     <NewSubCategory></NewSubCategory>
          </Suspense>
        ),
      },
    
    ],
  },


  {
    // path: '/ECommerce',
    name:"Order",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
      <ECommerce />
      </Suspense>
    ),
    children: [
      {
        path: 'orderList', 
       name:"Order List",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
          <OrderList></OrderList>
          </Suspense>
        ),
      },

    
    ],
  },
];

export default routes;
