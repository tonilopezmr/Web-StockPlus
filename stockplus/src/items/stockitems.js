import React from 'react'

import {
    List, 
    Create, 
    Datagrid, 
    ReferenceField, 
    TextField,     
    ReferenceInput, 
    required, 
    SelectInput, 
    SimpleForm, 
    TextInput ,
    NumberField,
    NumberInput
} from 'admin-on-rest'

export const ItemList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="price" options={{style: 'currency', currency: 'EUR' }} />
            <NumberField source="quantity" />
            <ReferenceField label="Category" source="category" reference="categories">
                <TextField source="name" />
            </ReferenceField>        
        </Datagrid>
    </List>
)

export const ItemCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Category" source="category" reference="categories" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <NumberInput source="price" />
            <NumberInput source="quantity" />
        </SimpleForm>
    </Create>
);