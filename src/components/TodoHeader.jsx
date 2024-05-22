import PropTypes from "prop-types";

export const TodoHeader = ({ children }) => <h1>{children}</h1>;

TodoHeader.propTypes = {
  children: PropTypes.node,
};
