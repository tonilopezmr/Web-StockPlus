import React from 'react'
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest'

import { ItemList, ItemCreate } from './items/stockitems'
import authClient from './authClient';
import { CategoryList, CategoryCreate } from './categories/categories';

import { addUploadCapabilities } from './capabilities/addUploadCapabilities'

const restClient = jsonServerRestClient('http://127.0.0.1:8080/v1');
const uploadCapableClient = addUploadCapabilities(restClient);


const App = () => (
  <Admin authClient={authClient} restClient={uploadCapableClient}>
    <Resource name="items" list={ItemList} create={ItemCreate} remove={Delete}/>
    <Resource name="categories" list={CategoryList} create={CategoryCreate} remove={Delete}/>
  </Admin>
)

export default App;

