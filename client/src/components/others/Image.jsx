import useImage from "../../hooks/useImage";
import Spinner from "./Spinner";

const Image = ({ src, height, width, className, alt }) => {
  const { source, loaded } = useImage(src);
  if (!loaded)
    return (
      <div
        style={{ height, width: width ? width : "100%" }}
        className="flex justify-center items-center"
      >
        <Spinner small />
      </div>
    );
  if (loaded)
    return (
      <img
        src={source}
        alt={alt ? alt : ""}
        style={{
          height: height ? height : "100%",
          width: width ? width : "100%",
        }}
        className={className}
      />
    );
};

export default Image;
 