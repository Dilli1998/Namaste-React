// Shimmer.js
const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-5">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-[200px] w-[200px] rounded-[8px] bg-[linear-gradient(to_right,#eeeeee_0%,#dddddd_20%,#eeeeee_40%,#eeeeee_100%)] bg-[length:800px_200px] animate-shimmer"
          />
        ))}
    </div>
  );
};

export default Shimmer;
