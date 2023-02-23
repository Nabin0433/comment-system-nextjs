import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { commentAtom } from '../atoms/commentAtom';
import CommentCard from './CommetCard';
import PostCommentform from './PostCommentform';

const Comment = () => {
    const [comments, setComments] = useRecoilState(commentAtom)

    //  logic for api intregation
    // useEffect(() => {
    // init comment  
    //     setComments([])
    // }, [])

    return (
        <div>
            <PostCommentform />
            {comments?.map(comment => (
                <CommentCard key={comment.commentId} comment={comment} />
            ))}
        </div>
    )
}

export default Comment



