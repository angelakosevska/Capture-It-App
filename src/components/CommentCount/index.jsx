import AddComment from "../AddComment/index";

const CommentCount =( {commentCount} ) => {
return (
    <button className="buttonLike">
    {commentCount} Comments
    </button>
)
}

export default CommentCount;