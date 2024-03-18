
type Comment = {"id":1,
    body: string;
    postId: string;
    user: {
        id: string;
        username: string;
    }
}


const getAllComments = async (): Comment[] => {
    const res = await fetch('https://dummyjson.com/comments')
    return res.json().comments
}


export const getCommentsByPostId = async (postId: string): Comment[] => getAllComments().filter( comm => comm.postId == potId )