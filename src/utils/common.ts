import { Season } from 'types/common.types';

const getSeason = (): Season => {
  let season: Season = 'spring';
  switch (new Date().getMonth()) {
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'autumn';
      break;
    case 11:
    case 0:
    case 1:
      season = 'winter';
      break;
  }
  return season;
};

export { getSeason };
