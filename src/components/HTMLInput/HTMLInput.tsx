import {Button, Paper} from '@mui/material';
import styles from './HTMLInput.module.scss';
import React, {ChangeEvent} from 'react';
import {DocumentListType} from '../MainPage';

type HTMLInputProps = {
    html: string,
    setHtml: (value: string) => void,
    parseHTML: ()=>void,
    setMessage: (message: string)=>void,
    setDownloaded: (number: number)=>void,
    setDocuments: (doc: DocumentListType)=>void
}

export function HTMLInput(props: HTMLInputProps) {

    const inputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.setHtml(event.currentTarget.value)
    }
    const clearInputHandler = () => {props.setHtml('')
        props.setMessage('HTML удален')
        props.setDownloaded(0)
        props.setDocuments([])
    }

    const updateHandler = () => {
        props.parseHTML()
        props.setDownloaded(0)
    }

    return (
        <Paper elevation={2} className={styles.htmlInput}>
            <Button className={styles.updateButton} onClick={updateHandler} variant={'contained'}>Обновить</Button>
            <Button className={styles.deleteButton} onClick={clearInputHandler} variant={'contained'}>Очистить</Button>
            <textarea value={props.html} onChange={inputHandler} placeholder={'Вставь HTML с сайта'}/>
        </Paper>
    )
}

export default HTMLInput;