import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../data/comments'

const CommentContainer = ({className}) => {
    const [comments, setComments] = useState([]);
    console.log(comments);
    useEffect(() => {
        (async() => {
            const commetnData =await getCommentsData();
            setComments(commetnData)
        })()
    },[])

    const addCommentHAndler =(value,parent =null,replyOnUser=null) => {
        const newComment ={
           
                _id: "10",
                user: {
                  _id: "a",
                  name: "Akram  Zayane",
                },
                desc: "it was a nice post, Thank you!",
                post: "1",
                parent: null,
                replyOnUser: null,
                createdAt: "2022-12-31T17:22:05.092+0000",
              

        };
        
    }
  return (
    <div className={`${className}`}>
        <CommentForm btnLabel="Send" formSubmitHandler={(value) => addCommentHAndler(value)}/>
      
    </div>
  )
}

export default CommentContainer
