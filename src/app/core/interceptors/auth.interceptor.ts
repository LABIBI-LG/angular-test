import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';

export const useAuthHenfer = new HttpContextToken<boolean>(() => true);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(useAuthHenfer)) {
    const authToken = 'YOUR_AUTH_TOKEN_HERE';
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return next(newReq);
  }
  return next(req);
};
