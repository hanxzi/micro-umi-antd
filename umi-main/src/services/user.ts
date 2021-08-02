import request from '@/utils/request';

export async function queryCurrent(): Promise<any> {
    return request('/api/homestay/get_user_info');
}

export async function getAccountLogin(params: any) {
    params = {
        phone: '15510000002',
        code: '0000'
    }
    return request('/api/homestay/login_by_captcha', {
        method: 'POST',
        data: params,
    });
}