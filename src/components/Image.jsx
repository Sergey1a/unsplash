import classes from "./Image.module.css";

function Image({ image }) {
  if (!image || !image.urls) {
    return null;
  }

  return (
    <div className={classes.imageWrapper}>
      <img
        src={image.urls.regular}
      />
    </div>
  );
}

export default Image;
