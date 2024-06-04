import { useContext } from "react";
import { SessionContext } from "../SessionProvider";

export function Post({ post, onDelete }) {
    const { currentUser } = useContext(SessionContext);
    return (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">by {post.userName}</h3>
            <p className="text-gray-700">{post.content}</p>
            {currentUser.id === post.userId && (
                <button
                    onClick={() => {
                        onDelete(post.id);
                    }}
                    className="text-blue-500 hover:underline cursor-pointer focus:outline-none"
                >
                    削除
                </button>
            )}
        </div>
    );
}
