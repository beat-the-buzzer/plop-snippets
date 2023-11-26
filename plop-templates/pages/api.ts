import { defHttp } from '/@/utils/http/axios';

enum Api {
  getList = '/api/getList',
}

export const getList = () => defHttp.get({ url: Api.getList });
