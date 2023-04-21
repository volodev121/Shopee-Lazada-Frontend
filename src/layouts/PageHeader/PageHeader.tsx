import "./PageHeader.scss";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  title: string;
  active: string;
  items: string[];
}

const PageHeader = (props: PageHeaderProps) => {
  return (
    <div>
      {/* <!-- PAGE-HEADER --> */}
      <div className="page-header">
        <h1 className="page-title">{props.title}</h1>
        <div>
          <ol className="breadcrumb">
            {props.items.map((value: string, index: number) => {
              return (
                <li key={index} className="breadcrumb-item">
                  <Link to="#">{value}</Link>
                </li>
              );
            })}
            <li className="breadcrumb-item active" aria-current="page">
              {props.active}
            </li>
          </ol>
        </div>
      </div>
      {/* <!-- PAGE-HEADER END --> */}
    </div>
  );
};

export default PageHeader;
