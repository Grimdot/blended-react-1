import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import { IconContext } from 'react-icons';

import PropTypes from 'prop-types';

export const StatisticItem = ({ title, total, icon }) => {
  console.log(typeof typeof icon);
  return (
    <StatisticBox>
      <IconContext.Provider value={{ color: '#2196F3', size: '30px' }}>
        {icon}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

StatisticItem.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
};
