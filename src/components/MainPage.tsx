import styles from './MainPage.module.scss'
import React, {useState} from 'react'
import {Paper} from '@mui/material';
import {ListOfDocuments} from './DocumentList/ListOfDocuments';
import {ControlPanel} from './ControlPanel/ControlPanel';
import {HTMLInput} from './HTMLInput/HTMLInput';


export type DocumentListType = Array<{
    index: number,
    title: string,
    link: string,
}>


function MainPage() {

    const [html, setHtml] = useState('')
    const [message, setMessage] = useState('Нет HTML документа')

    const [documents, setDocuments] = useState<DocumentListType>([])

    let [downloaded, setDownloaded] = useState(0)

    const [input, setInput] = useState(
        localStorage.getItem('download interval')
            ? Number(localStorage.getItem('download interval'))
            : 15
    )



    const ParseHTML = () => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, 'text/html');

        const x = doc.getElementsByClassName('recordActionsItemsContainer');
        let arr = Array.prototype.slice.call(x)

        let arrayOf = arr.map((item, index) => {
            return {
                index: index,
                title: item.parentElement.attributes[3].nodeValue,
                link: 'https://connectedsource.pwcinternal.com' + item.parentElement.attributes[9].nodeValue,
            }
        })

        if (arrayOf.length !== 0){
            setDocuments(arrayOf)
            setMessage('Документы готовы к загрузке')
        } else {
            setMessage('Неверный формат HTML')
        }

    }

    const DownloadDocuments = async () => {

        if (documents.length !== 0 && input !== NaN){

            setMessage(`Идет загрузка раз в ${input} сек`)
            documents.forEach((item, index) => {
                setTimeout(() => {
                    window.open(item.link, '_blank')
                }, (1000 * input) * (index + 1))
            })
        } else {
            setMessage('Нет документов для загрузки или неверное значение интервала')
        }
    }

    return (
        <Paper elevation={1} className={styles.wrapper}>

            <div className={styles.header}>
                <h1>Парсер документов</h1>
            </div>

            <ListOfDocuments documents={documents}/>

            <ControlPanel input={input} setInput={setInput} message={message} DownloadDocuments={DownloadDocuments} valueDownloaded={downloaded}/>

            <HTMLInput html={html} parseHTML={ParseHTML} setHtml={setHtml} setMessage={setMessage}
                       setDownloaded={setDownloaded} setDocuments={setDocuments}/>

        </Paper>
    )
}

export default MainPage