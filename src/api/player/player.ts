import { defHttp } from '@/utils/http/axios'
import { GetPlayerModel } from './model/playerModel'

enum Api {
  PLAYERLIST = '/playlist/hot',
  SESSION_TIMEOUT = '/user/sessionTimeout',
  TOKEN_EXPIRED = '/user/tokenExpired',
}

// Get personal center-basic settings

export const playlistApi = () => defHttp.get({ url: Api.PLAYERLIST })

export const sessionTimeoutApi = () => defHttp.post<void>({ url: Api.SESSION_TIMEOUT })

export const tokenExpiredApi = () => defHttp.post<void>({ url: Api.TOKEN_EXPIRED })
