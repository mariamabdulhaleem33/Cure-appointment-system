import { Link } from "react-router-dom";
type IProps = {
  bio: string;
};
const Description = ({ bio }: IProps) => {
  return (
    <>
      <div>
        <h2 className="text-[20px] mb-1">About me</h2>
        <p className="text-[14px] text-[#404448]">
          {bio}
          <Link to={"#"} className="text-[#145DB8]">
            Read more
          </Link>
        </p>
      </div>
    </>
  );
};

export default Description;
