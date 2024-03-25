import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center">
            <button className="btn btn-secondary">BREAKING NEWS</button>
            <div className="cursor-pointer">
                <Marquee pauseOnHover="true" speed={100}>
                    <Link to={"/"}>
                        I can be a React component, multiple React components,
                        or just some text.
                    </Link>
                    <Link to={"/"}>
                        I can be a React component, multiple React components,
                        or just some text.
                    </Link>
                    <Link to={"/"}>
                        I can be a React component, multiple React components,
                        or just some text.
                    </Link>
                    <Link to={"/"}>
                        I can be a React component, multiple React components,
                        or just some text.
                    </Link>
                    <Link to={"/"}>
                        I can be a React component, multiple React components,
                        or just some text.
                    </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;
