import { 
  SET_EXPLORER,
  SET_DESKTOP, 
  DOCUMENTS,
  DOWNLOADS, 
  SONGS,
  PICTURES, 
  VIDEOS 
} from "@context/types";

const routeReducer = (state, action) => {

  const { type } = action;

  switch(type) {
    case SET_EXPLORER: 
      return {
        explorer: true,
      };
    case SET_DESKTOP: 
      return {
        desktop: true,
        explorer: false
      };
    case DOCUMENTS:
      return {
        documents: true,
        explorer: false
      };
    case DOWNLOADS: 
      return {
        downloads: true,
        explorer: false
      };
    case SONGS: 
      return {
        songs: true,
        explorer: false
      };
    case PICTURES:
      return {
        pictures: true,
        explorer: false
      };
    case VIDEOS:
      return {
        videos: true,
        explorer: false
      };
    default:
      return state;
  };
};

export {routeReducer};