import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostContext";

function PostCard({ post }) {
    const navigate = useNavigate()
  const { deletePost } = usePosts();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Do you want to delete? <strong>{id}</strong>
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm rounded-sm mx-2 text-white"
              onClick={(e) => {
                  deletePost(id)
                  toast.dismiss(t.id)
                }
              }
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: "4000",
        style: {
          background: "#202020",
        },
      }
    );
  };
  return (
    <div className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer" onClick={()=> navigate(`/posts/${post._id}`)}>
      <div className=".px-4 py-7">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold"> {post.title}</h3>
          <button
            className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded-sm"
            onClick={(e) =>
                {e.stopPropagation();
                handleDelete(post._id)
            }}
          >
            Delete
          </button>
        </div>
        <p className="text-gray-400">{post.description}</p>
      </div>
        {post.image && <img className="h-96 w-full object-cover" src={post.image.url} alt={post.title}/>}
    </div>
  );
}

export default PostCard;