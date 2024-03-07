import { useGetPostsQuery } from "../store/services/posts";
import PostInterface from "../Interface/PostInterface";

const Notes = () => {
    const {data, error, isLoading} = useGetPostsQuery();

    if (data === undefined) {
        return (
            <div>Упси, ошибочка</div>
        )
    }

    return (
        <div className='posts_block'>
            {data.map((post: PostInterface) => (
                <div className='post'>
                    <h1>
                        {post.title}
                    </h1>
                    <p>category: {post.description}</p>

                    <p>{post.post}</p>
                </div>
            ))}
        </div>
    )
}

export default Notes;