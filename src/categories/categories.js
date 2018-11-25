import React from 'react';
import { 
    List,
    Datagrid,
    TextField,
    Create, 
    SimpleForm,
    TextInput,
    DeleteButton
} from 'admin-on-rest';

export const CategoryList = (props) => (
    <List title="Categories" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />            
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CategoryCreate = (props) => (
    <Create {...props}>
        <SimpleForm>            
            <TextInput source="name" />        
        </SimpleForm>
    </Create>   
)