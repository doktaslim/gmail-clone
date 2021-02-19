import React from 'react'
import { useHistory } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { Archive, ArrowBack, Delete, LabelImportant, Print, Report } from '@material-ui/icons'
import './Mail.css'
import { useSelector } from 'react-redux'
import { selectOpenMail } from '../../features/mailSlice'
import moment from 'moment'

const Mail = () => {
    const history = useHistory()

    const selectedMail = useSelector(selectOpenMail)

    return (
        <div className='mail'>
            <div className='mail__tools'>
                <div className='mail__tools__left'>
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <Archive />
                    </IconButton>
                    <IconButton>
                        <Report />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                </div>

                <div className='mail__tools__right'>
                    <IconButton>
                        <Print />
                    </IconButton>
                </div>
            </div>

            <div className="mail__body">
                <div className='mail__body__header'>
                    <h3>{selectedMail?.subject}</h3>
                    <LabelImportant className="mail__important" />
                    <p>{selectedMail?.to}</p>
                    <p className='mail__time'>{moment(selectedMail?.timeStamp).startOf('day').fromNow()}</p>
                </div>
                <div className="mail__message">
                    <p>{selectedMail?.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
