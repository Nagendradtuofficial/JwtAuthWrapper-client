// jwtAuthWrapper.d.ts

declare module 'jwtauthwrapper' {
    import { ReactNode } from 'react';
  
    interface JWTAuthWrapperProps {
      appType: string;
      children: ReactNode;
    }
  
    export function logout_user(): void;
  
    export default function JWTAuthWrapper(props: JWTAuthWrapperProps): JSX.Element;
  }
  