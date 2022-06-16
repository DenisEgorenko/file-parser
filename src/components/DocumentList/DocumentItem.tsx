import {Paper} from '@mui/material';
import styles from './DocumentItem.module.scss';
import React from 'react';

type DocumentListItemProps = {
    number: number,
    title: string
}

export function DocumentItem(props: DocumentListItemProps) {
    return (
        <Paper elevation={1} className={styles.document}>
            <div className={styles.documentNumber}>
                {props.number}
            </div>

            <div className={styles.documentTitle}>
                {props.title}
            </div>

        </Paper>
    )
}