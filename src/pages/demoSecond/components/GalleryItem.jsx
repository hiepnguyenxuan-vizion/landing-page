export const GalleryItem = (props) => {
  const { url, id, title, desc, link } = props.item;

  return (
    <figure className="gallery__item">
      <div className="gallery__item-img">
        <img className="gallery__item-imginner" src={url} alt={id} />
        <div className="gallery__item-desc">
          <p>{desc}</p>
        </div>
      </div>
      <figcaption className="gallery__item-caption">
        <h2 className="gallery__item-title" data-scroll data-scroll-speed={1}>
          {title}
        </h2>
        <span className="gallery__item-number">0{id + 1}</span>
        <p className="gallery__item-tags" />
        <a
          href={link}
          target="_blank"
          className="gallery__item-link"
          rel="noreferrer"
        >
          explore
        </a>
      </figcaption>
    </figure>
  );
};
