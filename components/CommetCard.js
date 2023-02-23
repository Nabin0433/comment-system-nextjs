import { useState } from "react"
import TimeAgo from "timeago-react"
import PostCommentform from "./PostCommentform"

const CommentCard = ({ comment }) => {
    const [showReply, setShowReply] = useState(false)
    const [showReplyBox, setShowReplyBox] = useState(true)

    const clickRplay = () => {
        if (!showReplyBox) {
            setShowReplyBox(true)
        } else {
            setShowReplyBox(true)
            setShowReply(!showReply)
        }
    }

    return (
        <div className='text-white flex items-start space-x-2 relative py-6'>
            <p className='w-[0.6px] top-[70px] bottom-[0px] bg-gray-300 absolute left-[23px] mt-1'></p>
            <div className='relative'>
                <img className='w-8 h-8 rounded-full' src={comment.userProfile} alt={comment.userName} />
            </div>
            <div className='pt-1'>
                <div className='flex items-center space-x-2'>
                    <h4>{comment.userName}</h4>
                    <TimeAgo
                        className='text-gray-400'
                        datetime={comment.timeStamp}
                    />
                </div>
                <div className='pt-2'>
                    <p className='max-w-[400px]'>{comment.comment}</p>
                    <button className='flex items-center space-x-2 pt-3' onClick={clickRplay}>
                        <img className='w-4 h-4 object-contain' src="commentIcon.svg" alt="commentIcon" />
                        <p>Reply</p>
                    </button>
                </div>
                {showReply && (
                    <div>
                        {showReplyBox && <PostCommentform commentId={comment.commentId} setShowReplyBox={setShowReplyBox} />}
                        {comment.reply?.[0] && comment?.reply?.map(comment => comment && (
                            <CommentCard key={comment.commentId} comment={comment} />
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default CommentCard