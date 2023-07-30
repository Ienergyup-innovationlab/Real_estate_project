
const PageNotFound = () => {
  return (
    <div fluid style={{ background: " #1f1f1f"}}>
      <div style={{ color: "grey", height: "100vh", background: " #1f1f1f", display: "flex", justifyContent: "center", alignItems: "center" }} className="emptyList_alert">
        Page Not Found
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#f33f3f"
          className="bi bi-exclamation-lg exclamation"
          viewBox="0 0 16 16"
        >
          <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
        </svg>
      </div>
    </div>
  );
};

export default PageNotFound;
