import { BreadcrumbsProps } from "../../common/types";

const Breadcrumbs = ({ breadcrumb }: BreadcrumbsProps): JSX.Element => {
  return <div>Home {breadcrumb && `> ${breadcrumb}`}</div>;
};

export default Breadcrumbs;
