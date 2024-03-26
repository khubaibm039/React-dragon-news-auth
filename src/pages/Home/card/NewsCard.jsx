import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { img, image_url, details, author, title, _id } = news;
    return (
        <div className="mb-6 ">
            <div className="p-4 border border-gray-500">
                <h4 className="text-2xl p-4">{title}</h4>
                <figure>
                    <img src={image_url} alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    {details.length > 200 ? (
                        <p>
                            {details.slice(0, 200)}{" "}
                            <Link to={`news/${_id}`} className="btn-link">
                                Read more..
                            </Link>{" "}
                        </p>
                    ) : (
                        <p>{details}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
