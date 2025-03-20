import PropTypes from 'prop-types';

export const FirstApp = (props) => {
  const { 
    title = 'No hay título', 
    subTitle = 'No hay subtítulo', 
    name = 'No existe un nombre' 
  } = props;

  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string,
}