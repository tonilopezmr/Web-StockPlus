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
    NumberInput,
    DeleteButton,
    ImageInput,
    ImageField,
    UrlField
} from 'admin-on-rest'

export const ItemList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="photo" title="Photo" />
            <TextField source="name" />
            <NumberField source="price" options={{style: 'currency', currency: 'EUR' }} />
            <NumberField source="quantity" />
            <ReferenceField label="Category" source="category" reference="categories">
                <TextField source="name" />
            </ReferenceField>      
            <UrlField source="referenceUrl" title="Purcharse URL" />
            <UrlField source="datasheet" title="Datasheet URL" />
            <DeleteButton />
        </Datagrid>
    </List>
)

export const ItemCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Category" source="category" reference="categories" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ImageInput source="photo" label="Photo" accept="image/*">
                <ImageField source="src"/>
            </ImageInput>
            <TextInput source="name" />
            <NumberInput source="price" />
            <NumberInput source="quantity" defaultValue="1" />
            <TextInput source="referenceUrl" lable="Reference URL" />
            <TextInput source="datasheet" lable="Datasheet URL" />
        </SimpleForm>
    </Create>
);