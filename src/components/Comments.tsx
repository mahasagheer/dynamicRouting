import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComment } from "../features/auth/CommentSlice";
import { CSpinner } from "@coreui/react";

const Comments: FC = () => {
  const state = useSelector((state) => state);
  const { postId } = useParams();
  const dispatch = useDispatch();

  return (
    <>
      <h1
        className="text-center text-3xl my-10"
        onClick={() => dispatch(fetchComment())}
      >
        View Comments
      </h1>
      {state.user.isLoading && (
        <div className="text-center text-xl">
          <CSpinner color="warning" variant="grow" />
        </div>
      )}
      {state.user.isError && (
        <div className="text-center text-xl">
          Check Your Internet Connection
        </div>
      )}
      {state.comment.data &&
        state.comment.data
          .filter((filterOut) => filterOut.postId == postId)
          .map((show, i) => (
            <Link key={i}>
              <div className="bg-[#A0DEFF] my-2  mx-[10%] w-[20] p-4 h-[90]">
                <p>
                  <strong>Name: </strong>
                  {show.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  {show.email}
                </p>
                <p>
                  <strong>Body: </strong>
                  {show.body}
                </p>
              </div>
            </Link>
          ))}
    </>
  );
};

export default Comments;
