import { useState } from "react"
import { toast } from "react-hot-toast"
import { useRecoilState } from "recoil"
import { commentAtom } from "../atoms/commentAtom"
import { getRandomId, getRandomImage, getRandomName, getRandomUniqueId } from "../utils/utils"

const PostCommentform = ({ commentId, setShowReplyBox }) => {
    const [comments, setComments] = useRecoilState(commentAtom)
    const [commetValue, setcommetValue] = useState()

    const submitComment = (e) => {
        e.preventDefault()
        if (!commentId) {
            // add new comment 
            addNewComment(e.target.comment.value)
        } else {
            // 
            addReplyOnComment(e.target.comment.value)
        }
    }

    const addNewComment = (comment) => {
        const notification = toast.loading('Loding...')
        setComments(old => ([{
            userProfile: getRandomImage(),
            userName: getRandomName(),
            userId: getRandomId(),
            comment: comment,
            commentId: getRandomUniqueId(),
            replayId: "",
            timeStamp: Date.now(),
            reply: []
        }, ...old]))
        setcommetValue('')
        toast.success('Your commet successfully added', { id: notification })
    }

    const addReplyOnComment = (commentText) => {
        const notification = toast.loading('Loding...')
        let arrayCopy = JSON.parse(JSON.stringify(comments));
        const findAndUpdate = (id, arr) => {
            const tgtObj = arr.find(
                ({ commentId }) => commentId === id
            );
            if (tgtObj) {
                tgtObj.reply = [{
                    userProfile: getRandomImage(),
                    userName: getRandomName(),
                    userId: getRandomId(),
                    comment: commentText,
                    commentId: getRandomUniqueId(),
                    replayId: "",
                    timeStamp: Date.now(),
                    reply: []
                }, ...tgtObj.reply];
            } else {
                arr.filter(el => 'reply' in el).forEach(
                    ({ reply }) => findAndUpdate(id, reply)
                );
            };
            return arr;
        };

        findAndUpdate(commentId, arrayCopy)
        setComments(arrayCopy)
        setcommetValue('')
        toast.success('Your reply successfully added', { id: notification })
    }
    return (
        <div className='border-[0.6px] border-gray-400 rounded-md mt-6'>
            <form onSubmit={(e) => submitComment(e)} className='flex flex-col'>
                <textarea className='rounded-t-md bg-transparent p-2 outline-none' rows="6" cols="60" type="text" name='comment' placeholder='What are your thoughts ?' onChange={e => setcommetValue(e.target.value)} value={commetValue} />
                <div className='px-2 bg-gray-700/40 flex justify-end rounded-b-md space-x-3'>
                    {commentId && <button type='button' className='px-4 py-1 rounded-full my-2 text-white text-[12px]' onClick={() => setShowReplyBox(false)}>Cancel</button>}
                    <button className='px-4 py-1 bg-white rounded-full my-2 text-black text-[12px]'>{commentId ? "Reply" : "Comment"}</button>
                </div>
            </form>
        </div>
    )
}

export default PostCommentform;