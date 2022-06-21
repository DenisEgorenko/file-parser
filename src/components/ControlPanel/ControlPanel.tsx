import {Button, Input, Paper} from '@mui/material';
import styles from './ControlPanel.module.scss';
import {LinearProgressWithLabel} from '../UI components/LinearProgressWithLabel';
import React, {ChangeEvent} from 'react';

type ControlPanelProps = {
    message: string,
    DownloadDocuments: ()=>void,
    valueDownloaded: number,
    input: number,
    setInput: (value: number) => void
}

export function ControlPanel(props: ControlPanelProps) {

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => props.setInput(Number(e.currentTarget.value))

    return (
        <Paper elevation={2} className={styles.controlPanel}>

            <div className={styles.input}>
                <span>Введите интервал скачивания (сек): </span>
                <Input onChange={inputChangeHandler}
                       value={props.input}
                       />
            </div>

            <div className={styles.loadButton}>

                <Button onClick={props.DownloadDocuments} variant={'contained'}>Загрузить документы</Button>
                <span>{props.message}</span>
            </div>

        </Paper>
    )
}

export default ControlPanel;