import {Paper} from '@mui/material';
import styles from './ListOfDocuments.module.scss';
import {DocumentItem} from './DocumentItem';
import React from 'react';
import {DocumentListType} from '../MainPage';

type ListOfDocumentsProps = {
    documents: DocumentListType
}

export function ListOfDocuments(props: ListOfDocumentsProps) {
    return (
        <Paper elevation={2} className={styles.documentsList}>
            <h3>Список документов для скачивания</h3>
            <div className={styles.docItemsList}>

                {props.documents.map(item => <DocumentItem number={item.index + 1}
                                                           title={item.title.slice(0, 80) + '...'}/>)}
            </div>
        </Paper>
    )
}