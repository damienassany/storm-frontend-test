import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ListItem, Props, Item } from './ListItem.component';
import { Importances } from '../../helpers/getListItemColor';

const createProps = (item: Omit<Item, "id"|"title">): Props => ({
    onCheck: () => null,
    onUncheck: () => null,
    item: {
        ...item,
        id: '1111-2222-3333-4444',
        title: 'I have to do this !'
    }
})

const lowImportanceProps = createProps({ isDone: false, importance: Importances.Low });
const lowImportanceDoneProps = createProps({ isDone: true, importance: Importances.Low });
const mediumImportanceProps = createProps({ isDone: false, importance: Importances.Medium });
const mediumImportanceDoneProps = createProps({ isDone: true, importance: Importances.Medium });
const highImportanceProps = createProps({ isDone: false, importance: Importances.High });
const highImportanceDoneProps = createProps({ isDone: true, importance: Importances.High });

storiesOf('ListItem', module)
    .add('Low importance', () => <ListItem {...lowImportanceProps} />)
    .add('Low importance Done', () => <ListItem {...lowImportanceDoneProps} />)
    .add('Medium importance', () => <ListItem {...mediumImportanceProps} />)
    .add('Medium importance Done', () => <ListItem {...mediumImportanceDoneProps} />)
    .add('High importance', () => <ListItem {...highImportanceProps} />)
    .add('High importance Done', () => <ListItem {...highImportanceDoneProps} />)