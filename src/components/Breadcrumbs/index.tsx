import { BreadcrumbsProps } from "../../common/types";
import "./Breadcrumbs.style.scss";

const Breadcrumbs = ({ breadcrumb }: BreadcrumbsProps): JSX.Element => {
  return (
    <div className="breadcrumbs">Home {breadcrumb && `> ${breadcrumb}`}</div>
  );
};

export default Breadcrumbs;
