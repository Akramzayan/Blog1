import React from 'react'
import CommentForm from './CommentForm'

const CommentContainer = ({className}) => {
    const addCommentHAndler =(value,parent =null,replyOnUser=null) => {

    }
  return (
    <div className={`${className}`}>
        <CommentForm btnLabel="Send"/>
      
    </div>
  )
}

export default CommentContainer
