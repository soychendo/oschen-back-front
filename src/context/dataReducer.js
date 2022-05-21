import { 
  GET_DATA, 
  GET_SONG,
  CLOSE_PLAYER, 
  ON_PLAYER, 
  OFF_PLAYER, 
  START_MENU,
  OUT_START_MENU,
} from "@context/types";

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  const { activeMenu } = state;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
      };
    case GET_SONG:
      return {
        ...state,
        selectedSong: payload,
        activeSong: true
      };
    case ON_PLAYER:
      return {
        ...state,
        isPlaying: true
      }
    case OFF_PLAYER:
      return {
        ...state,
        isPlaying: false
      }    
    case CLOSE_PLAYER:
      return {
        ...state,
        activeSong: false
      }
    case START_MENU:
      return {
        ...state,
        activeMenu: !activeMenu
      }
    case OUT_START_MENU:
      return {
        ...state,
        activeMenu: false
      }
    default:
      return state;
  }
};