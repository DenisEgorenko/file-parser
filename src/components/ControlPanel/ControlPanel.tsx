import {Button, Paper} from '@mui/material';
import styles from './ControlPanel.module.scss';
import {LinearProgressWithLabel} from '../UI components/LinearProgressWithLabel';
import React from 'react';

type ControlPanelProps = {
    message: string,
    DownloadDocuments: ()=>void,
    valueDownloaded: number
}

export function ControlPanel(props: ControlPanelProps) {


    return (
        <Paper elevation={2} className={styles.controlPanel}>
            <div className={styles.loadButton}>
                <Button onClick={props.DownloadDocuments} variant={'contained'}>Загрузить документы</Button>
                <span>{props.message}</span>
            </div>

            <div className={styles.loadProgress}>
                <LinearProgressWithLabel value={props.valueDownloaded}/>
            </div>
        </Paper>
    )
}

export default ControlPanel;